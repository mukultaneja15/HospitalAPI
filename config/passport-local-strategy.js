const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const DOCTOR = require('../models/doctor');


// authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'username',
    passReqToCallback: true
},
    function (req, username, password, done) {
        // find a user and establish the identity
        DOCTOR.findOne({ username: username }, function (err, doctor) {
            if (err) {
                console.log('Error finding user')
                return done(err);
            }

            if (!doctor || doctor.password != password) {
                console.log('Invalid Username/Password!');
                return done(null, false, {
                    message: 'Invalid Username or Password'
                });
            }

            else {
                console.log(doctor);
                return done(null, doctor, {
                    message: 'Logged in Successfully!'
                });
            }
        });
    }
));

module.exports = passport;