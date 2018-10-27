// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const dburi =
  process.env.NODE_ENV === 'development'
    ? 'mongodb://localhost:27017/uno_server_v1'
    : `mongodb://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PASSWORD}@${
        process.env.TEST_DB_CONNECTION_ADDRESS
      }`;

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
