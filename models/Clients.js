var mongoose = require('mongoose');

var CustomerInfo = new mongoose.Schema({
  name: String,
  email: String,
  date:String,
  submitted_date: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Client', CustomerInfo);
