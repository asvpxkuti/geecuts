const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


// Connect To Database (OLD CODE)
mongoose.connect('mongodb://kwasidb:kwasidb23@ds125881.mlab.com:25881/geecuts1',{ useNewUrlParser: true });
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database ');
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

const app = express();

const client = require('./routes/client');

// Port Number
const port = process.env.PORT || 5000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':false}));
// Passport Middleware

app.use('/client', client);

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index'));
});

// Start Server
app.listen(port, () => {
  console.log(`Express server listening on port in mode ${port}`);
});