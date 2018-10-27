// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
  process.env.TEST_DB_URI || process.env.PROD_DB_URI,
  { useNewUrlParser: true }
);
mongoose.connection.on('error', err => {
  console.error(err);
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});
module.exports = app;
