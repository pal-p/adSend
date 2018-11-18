const mongoose = require('mongoose');
// * const Schema = mongoose.Schema;
//same by destructuring//*
const {Schema} = mongoose;

//create user sch .can +/- properties here!
const userSchema = new Schema ({
   googleId: String,
   credits: { type: Number, default: 0}
});

//create users collection load the schema to it(2 args)
mongoose.model('users',userSchema);
