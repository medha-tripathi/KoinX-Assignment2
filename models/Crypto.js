const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  market_cap: { type: Number, required: true },
  change_24h: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Crypto', cryptoSchema);
