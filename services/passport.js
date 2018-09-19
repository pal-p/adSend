//require passport and google strategy for oauth
const passport = require('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;

//get keys for google strategy use
const keys =require('../config/keys');

//needed to fetch user collec
const mongoose = require('mongoose');
//fetch collect in User (model class). use this model class to make model instances and save to db
//get models defined elsewhere directly from mongoose
const User = mongoose.model('users');



//tell pasport how to use google strategy.pass config args inside.2 options client id and client secret, provided by google oath service (keep them secure!).now use user model class tocreate an instance and save to db
passport.use( 
 new GoogleStrategy({
   clientID: keys.googleClientId,
   clientSecret: keys.googleClientSecret,
   callbackURL: '/auth/google/callback'//this is the url user is redirected to our srvr after giving premision 
 }, (accessToken, refreshToken, profile, done) => {
     new User({googleId: profile.id}).save();
     
    
    })
);

