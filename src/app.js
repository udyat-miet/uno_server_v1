// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const dburi =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
    ? process.env.TEST_DB_URI
    : process.env.PROD_DB_URI;

mongoose.connect(
  `${dburi}`,
  { useNewUrlParser: true }
);
mongoose.connection.on('error', err => {
  console.error(err);
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  process.exit(1);
});

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});
module.exports = app;
