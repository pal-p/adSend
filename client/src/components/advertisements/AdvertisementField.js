import React from 'react';

export default ({input, label, meta})=>{

  console.log(meta); 
 // console.log(props);
  return(
     <div style={{ backgroundColor: '#e1d084'}}>
         
         <label style={{color:'#5c0303'}}>{label}</label>
         <input {...input}  />
         <div> {meta.error} </div>
     </div>
  );

};
