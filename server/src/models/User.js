const mongoose = require('mongoose');

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

module.exports = mongoose.model('User', userSchema);