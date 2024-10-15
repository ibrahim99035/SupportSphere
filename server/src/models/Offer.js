const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  document: { type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true },
  workshop: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  offerDetails: { type: String, required: true }, 
  status: { type: String, enum: ['buffering', 'accepted', 'denied'], default: 'buffering' }, // Status flag
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Offer', offerSchema);