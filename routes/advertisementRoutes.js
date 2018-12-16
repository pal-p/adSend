const requireLogin = require ('../middlewares/requireLogin');
const requireCredit = require ('../middlewares/requireCredit');
const Mailer = require('../services/Mailer');
const advertisementTemplate = require('../services/emailTemplates/advertisementTemplate');
const mongoose = require('mongoose');
const Advertisement = mongoose.model('advertisements');
module.exports = app => {
 

   app.post('/api/dashboard', requireLogin, requireCredit, (req, res) =>{
       const { title, subject, body, recipients } = req.body;

       const advertisement = new Advertisement({
         title,
         subject,
         body,
         recipients: recipients.split(',').map(email => ({ email: email.trim() })),
         _user: req.user.id,
         dateSent: Date.now()
       });
       //send email
       const mailer = new Mailer(advertisement, advertisementTemplate(advertisement));
       mailer.send();
             
   });


};
