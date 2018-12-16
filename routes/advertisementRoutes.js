const requireLogin = require ('../middlewares/requireLogin');
const requireCredit = require ('../middlewares/requireCredit');
const Mailer = require('../services/Mailer');
const advertisementTemplate = require('../services/emailTemplates/advertisementTemplate');
const mongoose = require('mongoose');
const Advertisement = mongoose.model('advertisements');
module.exports = app => {
 

   app.post('/api/dashboard', requireLogin, requireCredit, async (req, res) =>{
       const { title, subject, body, recipients, salesUrl} = req.body;

       const advertisement = new Advertisement({
         title,
         subject,
         body,
         recipients: recipients.split(',').map(email => ({ email: email.trim() })),
         _user: req.user.id,
         dateSent: Date.now(),
         salesUrl
       });
       //send email
       const mailer = new Mailer(advertisement, advertisementTemplate(advertisement));
       
       try {
         await mailer.send();
         await advertisement.save();
         req.user.credits -= 1;
         const user = await req.user.save();

         res.send(user);
        } catch (err) { //throw unprocessable entity error
       res.status(422).send(err);
       }
             
   });


};
