const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['not started', 'in progress', 'done'], // Define the allowed statuses
    default: 'not started' // Default status
  },
  moderator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the moderator
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Problem', problemSchema);