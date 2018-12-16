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
	app.get('/auth/google/callback', passport.authenticate('google'), (req,res)=> {res.redirect('/dashboard')});

              

     //test auth by showing req.user 
     app.get('/api/current_user', (req,res) =>{
               res.send(req.user);
     });
     //log out req.user 
     app.get('/api/logout', (req,res) =>{
               req.logout(); 
               //logout func attached to req automatically by passport
     
               res.redirect('/');
       });



};
