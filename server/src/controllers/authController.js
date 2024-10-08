const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = require('../utils/generateToken');

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

// User Registration
exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Check if the role is admin
    if (role === 'admin') {
      return res.status(403).json({ message: 'Unauthorized: cannot assign admin role' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      active: true,
      approved: false,
      emailActivated: false,
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error during registration' });
  }
};

// User Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
      const user = await User.findOne({ email });

      if (user && (await user.matchPassword(password))) {
          res.json({
              _id: user._id,
              name: user.name,
              email: user.email,
              role: user.role,
              token: generateToken(user._id),
          });
      } else {
          res.status(401).json({ message: 'Invalid email or password' });
      }
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

// Email Activation (Verifies user email)
exports.activateEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    if (user.emailActivated) {
      return res.status(400).json({ message: 'Email already activated' });
    }

    user.emailActivated = true;
    await user.save();

    res.json({ message: 'Email activated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error during email activation' });
  }
};

// Get Current User Info
exports.getCurrentUser = async (req, res) => {
  try {
    const { userId } = req.body; // Extract user ID from the request body

    // Validate if userId is provided
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    // Fetch the user by ID and exclude the password field
    const user = await User.findById(userId).select('-password');

    // If no user is found, return a 404 response
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with the user data
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data' });
  }
};

// Update Password
exports.updatePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.user.userId);

    // Check if old password matches
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Old password is incorrect' });
    }

    // Hash and set new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;

    await user.save();
    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating password' });
  }
};

// Forgot Password (Token generation for reset)
exports.forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'User with this email does not exist' });
    }

    // Generate a reset token (can be customized)
    const resetToken = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '10m' });

    // Send resetToken to user (via email logic, here just responding)
    res.json({ resetToken });
  } catch (error) {
    res.status(500).json({ message: 'Error processing password reset' });
  }
};

// Reset Password (with token)
exports.resetPassword = async (req, res) => {
  const { resetToken, newPassword } = req.body;

  try {
    const decoded = jwt.verify(resetToken, JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(400).json({ message: 'Invalid token or user not found' });
    }

    // Hash and set new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;

    await user.save();
    res.json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error resetting password' });
  }
};

// Update user details
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
};

// Update workshop information (contactInfo, address, mapLocation)
exports.updateWorkshopInfo = async (req, res) => {
  const { contactInfo, address, mapLocation } = req.body;
  const { userId } = req.params;  // Extract the userId from URL parameters
  console.log(userId);

  try {
    // Fetch the user by userId from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Ensure the user is a workshop before allowing the update
    if (user.role !== 'workshop') {
      return res.status(403).json({ message: 'Only workshops can update this information' });
    }

    // Update the user's workshop information
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { contactInfo, address, mapLocation },
      { new: true }  // Return the updated document
    );

    res.json({
      message: 'Workshop information updated successfully',
      updatedUser,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: 'Error updating workshop information' });
  }
};