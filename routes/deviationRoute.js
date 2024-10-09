const express = require('express');
const Crypto = require('../models/Crypto');

const router = express.Router();

const calculateStandardDeviation = (prices) => {
  const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
  const variance = prices.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / prices.length;
  return Math.sqrt(variance).toFixed(2);
};

router.get('/deviation', async (req, res) => {
  const { coin } = req.query;

  const supportedCoins = ['bitcoin', 'ethereum', 'matic-network'];
  if (!supportedCoins.includes(coin)) {
    return res.status(400).json({ error: 'Invalid coin name. Supported coins are: bitcoin, ethereum, matic-network' });
  }

  try {
    const cryptoData = await Crypto.find({ name: coin })
      .sort({ timestamp: -1 })
      .limit(100);

    if (cryptoData.length < 2) {
      return res.status(400).json({ error: 'Not enough data to calculate standard deviation.' });
    }

    const prices = cryptoData.map(record => record.price);

    const deviation = calculateStandardDeviation(prices);

    return res.json({ deviation: parseFloat(deviation) });
  } catch (error) {
    console.error('Error fetching data from database', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
