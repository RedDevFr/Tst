// /database/escrowModel.js

const mongoose = require('mongoose');

const escrowSchema = new mongoose.Schema({
  transactionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction', required: true },
  fundsHeld: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'released', 'disputed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

const Escrow = mongoose.model('Escrow', escrowSchema);

module.exports = Escrow;