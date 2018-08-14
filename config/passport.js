let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;
let Barber = require('../models/Users');
let config = require('../config/');

let userAuthentication = function(passport){
    let options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: config.secret
    }

    passport.use(new JwtStrategy(options,(jwt_payload, done) => {
        Barber.findOne({
            id:jwt_payload.id
        }, (err, user) => {
            if(err) return done(err, false);

            if(user){
                done(null,user)
            }else{
                done(null,false);
            }
        })
    }))
}

module.exports = userAuthentication;