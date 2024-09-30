const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
  problem: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true },
  document: { type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true },
  offers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Offer' }],  // List of offers made
  chosenOffer: { type: mongoose.Schema.Types.ObjectId, ref: 'Offer' }, // The offer chosen by the customer
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  moderator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  workshop: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Workshop chosen by the customer
  status: { type: String, enum: ['started', 'finished'], default: 'started' }, // Status flag
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Deal', dealSchema);