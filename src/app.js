// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const dburi = process.env.TEST_DB_URI;

mongoose.connect(
  dburi,
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
