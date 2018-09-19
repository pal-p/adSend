//figure out what credentials to return
if(process.env.NODE_ENV ==='production'){
//are in prod. return prod keys
module.exports = require('./prod');
} 
else{
//we are in dev. return prod keys

module.exports = require('./dev');

}
