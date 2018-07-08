var express = require('express');
var router = express.Router();
var Client = require('../models/Clients');
//var nodemailer = require('nodemailer');

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/* GET ALL CLIENT */
router.get('/', function(req, res) {
  Client.find(function (err, clients) {
    if (err){
      handleError(res,err.message,'data not found');
    }
    ;
    res.json(clients);
  });   
});

/* GET SINGLE CLIENT BY ID */
router.get('/:id', function(req, res, next) {
  Client.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CLIENT */
router.post('/save', function(req, res, next) {
  Client.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE CLIENT */
router.put('/:id', function(req, res, next) {
  Client.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Client.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/* router.post('/sendmail', function(req, res) {
  
  console.log('loading request body '+ JSON.stringify(req.body));
  console.log('request data '+ req.body.email);
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        //host: 'smtp.gmail.com',
        service:'gmail',
        //port: 587,
        //secure: false, // true for 465, false for other ports
        auth: {
            user: 'eroppong@gmail.com', // generated ethereal user
            pass: 'home1990' // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Young Mani" <eroppong@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: 'Prospect Client', // Subject line
        text: 'Testing', // plain text body
        html: '<b>Appointment has been booked/b>' // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }else{
          res.json({msg:'email sent',success:true})
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
  
}); */

module.exports = router;
