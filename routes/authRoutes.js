const passport = require('passport');

//make this func to use in index file
module.exports = app => {

//now test oath:
//2nd arg says involve passport and auth by passport's 'google' strategy.the string 'google' is built in identifier of GoogleStrategy. 2nd arg scope specifies to google srvr what we want to access about user.
app.get(
	'/auth/google',
	passport.authenticate('google',{
 	  scope: ['profile', 'email']
        })
);


//redir uri route  handler
app.get('/auth/google/callback', passport.authenticate('google'));

};
