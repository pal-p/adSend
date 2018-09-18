//#create our express server and new route handler.it is the root file.create express application and logic to handle requests here.
const express = require('express');

//require passport and google strategy for oauth
const passport = require('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;

//get keys for google strategy use
const keys =require('./config/keys');




//create the exp application can have many in one node js proj.gets the req from node and hands to handlers...
const app =express(); 

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


//now test oath
//2nd arg says involve passport and auth by passport's 'google' strategy.the string 'google' is built in identifier of GoogleStrategy. 2nd arg scope specifies to google srvr what we want to access about user.
app.get(
	'/auth/google',
	passport.authenticate('google',{
 	  scope: ['profile', 'email']
        })
);


//redir uri route  handler
app.get('/auth/google/callback', passport.authenticate('google'));








//listen on port 3000
//app.listen(3000);

//a) dynamicport bind for heroku
//if underlying env of heroku has defined port(for production) use it, or by default use 3000 (in development) 
const PORT = process.env.PORT || 3000;
app.listen(PORT);
//b) tell heroku the version of node to use: package.json -> engines

//c tell heroku how to run our server.package.json scripts section "start": "node index.js"


//d) avoid commiting all the express dependencies (node_modules) to heroku. so .gitignore file inside server dir

