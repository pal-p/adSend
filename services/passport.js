//require passport and google strategy for oauth
const passport = require('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;

//get keys for google strategy use
const keys =require('../config/keys');


//tell pasport how to use google strategy.pass config args inside.2 options client id and client secret, provided by google oath service (keep them secure!).
passport.use( 
 new GoogleStrategy({
   clientID: keys.googleClientId,
   clientSecret: keys.googleClientSecret,
   callbackURL: '/auth/google/callback'//this is the url user is redirected to our srvr after giving premision 
 }, (accessToken, refreshToken, profile, done) => {
    console.log('accessToken',accessToken);
    console.log('refreshToken',refreshToken);
    console.log('profile:',profile);
    })
);

