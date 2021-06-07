// express server
const express = require('express');
const app = express();

// port to be used
const port =  process.env.PORT

// Database
const db = require('./config/mongoose');

app.use(express.urlencoded());

// using passport for authentication
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');

app.use(passport.initialize());

//express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
