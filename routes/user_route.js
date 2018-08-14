var express = require('express');
var router_ = express.Router();
var Client = require('../models/Clients');
var passport = require('passport');
let jwt = require('jsonwebtoken');
const config = require('../config/index');
const barberUser = require('../models/Users');


// Authenticate the user and get a JSON Web Token to include in the header of future requests.
router_.post('/login', (req, res) => {
  barberUser.findOne({
    email: req.body.email
  }, function(err, username) {
    if (err) throw err;

    if (!username) {
      res.send({
        success: false,
        message: 'Authentication failed. User not found.'
      });
    } else {
      // Check if password matches
      barberUser.comparePassword(req.body.password,username.password, function(err, isMatch) {
        if (isMatch && !err) {
          // Create token if the password matched and no error was thrown
          var token = jwt.sign({auth: username.username},config.secret , {
            expiresIn: "1 days"
          });
          res.json({
            success: true,
            message: 'Authentication successfull',
            token
          });
        } else {
          res.send({
            success: false,
            message: 'Authentication failed. Passwords did not match.'
          });
        }
      });
    }
  });
});

router_.post('/register',(req, res)=>{
    console.log(JSON.stringify(req.body));
  
    if (!req.body.email || !req.body.password) {
        res.json({
          success: false,
          message: 'Please enter email and password.'
        });
      } else {barberUser.addUser(req,res);}
});

router_.get('/home', passport.authenticate('jwt', {
  session: false
}), function(req, res) {
  res.send('It worked! User id is: ' + req.user._id + '.');
});


module.exports = router_;