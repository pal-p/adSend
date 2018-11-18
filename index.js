//#create our express server and new route handler.it is the root file.create express application and logic to handle requests here.
const express = require('express');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI);

//cookie auth
const cookieSession = require('cookie-session');
const passport = require('passport');

const bodyParser = require ('body-parser');

//const authRoutes = require ('./routes/authRoutes');

//create the exp application can have many in one node js proj.gets the req from node and hands to handlers...
const app =express(); 

//body-parser middlewear
app.use(bodyParser.json());



app.use(
  //pass a cofiguration obj to cookieSession now:
  cookieSession({
  //maxtime for cookie to live in the browser = 1 month in mili sec
  maxAge : 30*24*60*60*1000,
  // key to encrypt cookie.array lets multiple keys to rand use one as extra security.put the key inside keys.js
  keys: [keys.cookieKey]
  })
);
//tell passport to use cookies
app.use(passport.initialize());
app.use(passport.session());


//use authRoutes file here!
//authRoutes(app);
require ('./routes/authRoutes')(app);

require ('./routes/billingRoutes')(app);


//listen on port 5000
//app.listen(5000);

//a) dynamicport bind for heroku
//if underlying env of heroku has defined port(for production) use it, or by default use 3000 (in development) 
const PORT = process.env.PORT || 5000;
app.listen(PORT);
//b) tell heroku the version of node to use: package.json -> engines

//c tell heroku how to run our server.package.json scripts section "start": "node index.js"


//d) avoid commiting all the express dependencies (node_modules) to heroku. so .gitignore file inside server dir

