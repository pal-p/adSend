//#create our express server and new route handler.it is the root file.create express application and logic to handle requests here.
const express = require('express');

//create the exp application can have many in one node js proj.gets the req from node and hands to handlers...
const app =express(); 

//route handler
app.get('/', (req,res) =>{

   res.send({hello: 'buddy wwoa!'});
});

//listen on port 3000
//app.listen(3000);

//a) dynamicport bind for heroku
//if underlying env of heroku has defined port(for production) use it, or by default use 3000 (in development) 
const PORT = process.env.PORT || 3000;

//b) tell heroku the version of node to use: package.json -> engines

//c tell heroku how to run our server.package.json scripts section "start": "node index.js"


//d) avoid commiting all the express dependencies (node_modules) to heroku. so .gitignore file inside server dir

