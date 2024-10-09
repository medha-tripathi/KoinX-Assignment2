const cron = require('node-cron');
const fetchCryptoData = require('../services/fetchData');
const storeCryptoData = require('../services/storeData');

cron.schedule('0 */2 * * *', async () => {
  console.log('Fetching and storing crypto data...');
  const cryptoData = await fetchCryptoData();
  console.log(cryptoData);
  if (cryptoData) {
    await storeCryptoData(cryptoData);
  }
});
