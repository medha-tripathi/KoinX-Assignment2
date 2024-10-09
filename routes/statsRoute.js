const express = require('express');
const Crypto = require('../models/Crypto'); 

const router = express.Router();

router.get('/stats', async (req, res) => {
  const { coin } = req.query;

  const supportedCoins = ['bitcoin', 'ethereum', 'matic-network'];
  if (!supportedCoins.includes(coin)) {
    return res.status(400).json({ error: 'Invalid coin name. Supported coins are: bitcoin, ethereum, matic-network' });
  }

  try {
    const cryptoData = await Crypto.findOne({ name: coin }).sort({ timestamp: -1 });

    if (!cryptoData) {
      return res.status(404).json({ error: 'No data found for the requested coin.' });
    }

    const response = {
      price: cryptoData.price,
      marketCap: cryptoData.market_cap,
      "24hChange": cryptoData.change_24h
    };

    return res.json(response);
  } catch (error) {
    console.error('Error fetching data from database', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
