const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/index');
mongoose.Promise = require('bluebird');

const app = express();
app.use(passport.initialize());
require('./config/passport')(passport);

// Connect To Database (OLD CODE)
mongoose.connect(config.database,{ useNewUrlParser: true });
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database ');
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});



const client = require('./routes/client_route');
const user = require('./routes/user_route');

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
app.use('/user', user);
// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});