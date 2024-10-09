const axios = require('axios');

const fetchCryptoData = async () => {
  try {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,matic-network&vs_currencies=usd&include_market_cap=true&include_24hr_change=true';
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from CoinGecko', error);
    return null;
  }
};

module.exports = fetchCryptoData;
