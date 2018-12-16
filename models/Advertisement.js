const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecipientSchema = require('./Recipient');
const advertisementSchema = new Schema ({
  
  title:String,
  body: String,
  subject: String,
  seen: {type:Number, default:0},
  recipients: [RecipientSchema],
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  dateSent: Date,
  lastVisited:Date
});

mongoose.model('advertisements',advertisementSchema);
