import React from 'react';

const AdFormReview =({ onCancel })=>{

     return(
        <div> 
           <h5> Please confirm your input:</h5>
           <button className="yellow darken-3 btn-flat"
              onClick={onCancel}
           >
             Back
           </ button>
        </div>
     );
  
};

export default AdFormReview;
