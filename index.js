const express = require('express');
const connectDB = require('./config/db.js');
const cronJob = require('./jobs/cronJob.js');
const statsRoute = require('./routes/statsRoute.js');
require('dotenv').config();

const app = express();

connectDB();

cronJob;

app.use(express.json());

app.use('/', statsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
