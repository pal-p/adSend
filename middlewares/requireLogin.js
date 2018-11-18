module.exports = (req, res, next) =>{
 if(!req.user){
     return res.status(401).send({error: 'You must log in!'});
  }
  //then pass the req to the next middleware
  next();
};
