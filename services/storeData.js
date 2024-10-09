const Crypto = require('../models/Crypto');

const storeCryptoData = async (cryptoData) => {
  try {
    const cryptos = ['bitcoin', 'ethereum', 'matic-network'];
    for (let crypto of cryptos) {
      const data = cryptoData[crypto];
      const newCrypto = new Crypto({
        name: crypto,
        price: data.usd,
        market_cap: data.usd_market_cap,
        change_24h: data.usd_24h_change,
      });
      await newCrypto.save();
      console.log(`${crypto} data saved`);
    }
  } catch (error) {
    console.error('Error storing data in MongoDB', error);
  }
};

module.exports = storeCryptoData;
