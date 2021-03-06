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


//turn user to unique identifier for followup reqs. user arg = created/retrieved user from db
passport.serializeUser((user, done) =>{
   done(null, user.id);// user.id is NOT profile id.it is user _id from db, auto generated by mongo.use this for making cookie cause it is never null.(googlid = null if dont sign in with google)
});

//turn id to user
passport.deserializeUser((id, done) =>{
    User.findById(id)
    .then(user =>{
      done(null,user);
    });
});



//tell pasport how to use google strategy.pass config args inside.2 options client id and client secret, provided by google oath service (keep them secure!).now use user model class tocreate an instance and save to db
passport.use( 
 new GoogleStrategy({
   clientID: keys.googleClientId,
   clientSecret: keys.googleClientSecret,
   callbackURL: '/auth/google/callback',//this is the url user is redirected to our srvr after giving premision 
   proxy: true
 }, async (accessToken, refreshToken, profile, done) => {
     const existingUser = await User.findOne({googleId: profile.id});
       
     if(existingUser){//already have this user in db

            //null=everything good, existingUser=found user
            done(null, existingUser);
     }
     else{
            //create user instance in js world and save it to mongodb by .save
            const user = await new User({googleId: profile.id})
              .save();
              done(null, user);
     }

      
    
    })
);
/*
passport.use( 
 new GoogleStrategy({
   clientID: keys.googleClientId,
   clientSecret: keys.googleClientSecret,
   callbackURL: '/auth/google/callback',//this is the url user is redirected to our srvr after giving premision 
   proxy: true
 }, (accessToken, refreshToken, profile, done) => {
     User.findOne({googleId: profile.id})
       .then((existingUser) =>{
          if(existingUser){//already have this user in db

            //null=everything good, existingUser=found user
            done(null, existingUser);
          }
          else{
            //create user instance in js world and save it to mongodb by .save
            new User({googleId: profile.id})
              .save()
              .then(user => done(null, user));
          }

       })
    
    })
);
*/
