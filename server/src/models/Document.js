const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  problem: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true },
  moderator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },  // Content of the report created by the moderator
  status: { type: String, enum: ['in progress', 'done'], default: 'in progress' }, // Status flag
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Document', documentSchema);