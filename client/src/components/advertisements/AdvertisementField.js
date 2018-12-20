import React from 'react';

export default ({input, label, meta:{error, touched}})=>{

  
  //console.log(meta); 
 // console.log(props);
  console.log(touched);
  return(
     <div>
         
         <label className="brown-text">{label}</label>
         <input {...input} style={{marginBottom: '5px'}}/>
         <div className="red-text" style={{marginBottom: '20px'}}>
              {touched && error} 
         </div>
     </div>
  );

};
