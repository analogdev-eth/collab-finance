require('dotenv').config();
const express = require('express');
const app = express();
const debug = require('debug')('app:start');
const connectDB = require('./utils/connect.js');
const pipeline = require('./utils/pipeline.js');


// connect DB
connectDB();


// application pipeline
pipeline(app);


// setup for listening
const PORT = process.env.PORT || 3001;
const server = app.listen(
  PORT, 
  () => debug(`${process.env.NODE_ENV} server running on http://localhost:${PORT} . . .`)
);


module.exports = server;