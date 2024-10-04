const User = require('../models/User');

// Get all users (admin access)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id; // Get the user ID from the request parameters

    // Find the user by ID
    const user = await User.findById(userId);

    // Check if the user was found
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};

// Approve a user's account
exports.approveUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.approved = true;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error approving user' });
  }
};

// Deactivate a user’s account
exports.deactivateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.active = false;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error deactivating user' });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};

// Get all customers
exports.getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: 'customer' });
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customers' });
  }
};

// Get all admins
exports.getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' });
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admins' });
  }
};

// Get all moderators
exports.getModerators = async (req, res) => {
  try {
    const moderators = await User.find({ role: 'moderator' });
    res.json(moderators);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching moderators' });
  }
};

// Get all workshops
exports.getWorkshops = async (req, res) => {
  try {
    const workshops = await User.find({ role: 'workshop' });
    res.json(workshops);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workshops' });
  }
};

// Get all unapproved users
exports.getUnapprovedUsers = async (req, res) => {
  try {
    const unapprovedUsers = await User.find({ approved: false });
    res.json(unapprovedUsers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching unapproved users' });
  }
};