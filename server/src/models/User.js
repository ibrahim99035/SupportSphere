const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'moderator', 'workshop', 'customer'], required: true },
  active: { type: Boolean, default: true },
  approved: { type: Boolean, default: false },
  emailActivated: { type: Boolean, default: false },
  contactInfo: { type: String },  // For workshop contact info
  address: { type: String },      // Workshop address
  mapLocation: { type: String },  // Map coordinates, could be a string for now (e.g., "lat, long")
}, { timestamps: true });

// Method to match entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Hash the password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', userSchema);