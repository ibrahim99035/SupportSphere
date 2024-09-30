const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  document: { type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true },
  workshop: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  offerDetails: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Offer', offerSchema);