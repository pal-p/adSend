import React from 'react';
import myLogo from '../email-sending.png';

const Landing = ()=>{

   return(
     <div style={{textAlign: 'center', backgroundColor:'#ffcc80'}}>
       <h1 style={{color:'#5c0303', fontWeight:'bold'}}>
          adSender
       </h1>
       <h3 style={{color:'#5c0303'}}> 
         Email Marketing
       </h3>
       <div>
          <img src={myLogo} alt="MyLogo" />;
       </div>
        
     </div>

   );
};
export default Landing;
