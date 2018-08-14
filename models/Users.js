var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var passportLocalMongoose = require('passport-local-mongoose');


var BarberSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true
    },
  password:  {
    type: String,
    required: true
  },
  email:{
        type: String,
        required: true
  }
});

const barberUser = module.exports = mongoose.model('barberUser',BarberSchema)

module.exports.getUserById = function(id, callback) {
    barberUser.findById(id, callback);
  }
  
module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username}
    barberUser.findOne(query, callback);
}
  
module.exports.addUser = function(req, res) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
        if(err) throw err;
        var data = {
            'username':req.body.username,
            'email':req.body.email,
            'password':hash
        }
        barberUser.create(data,(err)=>{
            if(err) throw err;
            res.json({'success':true});
        })
    });
});

}
  
module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}
