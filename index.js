const express = require('express');
const connectDB = require('./config/db.js');
const cronJob = require('./jobs/cronJob.js');
require('dotenv').config();

const app = express();

connectDB();

cronJob;

app.use(express.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
