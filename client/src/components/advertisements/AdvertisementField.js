import React from 'react';

export default ({input, label, meta:{error, touched}})=>{

  
  //console.log(meta); 
 // console.log(props);
  console.log(touched);
  return(
     <div style={{ backgroundColor: '#e1d084'}}>
         
         <label style={{color:'#5c0303'}}>{label}</label>
         <input {...input}  />
         <div> {touched && error} </div>
     </div>
  );

};
