import React from 'react';
import {connect} from 'react-redux';
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

function mapStateToProps(state){
  console.log(state);
  return {
    
  };
};
export default connect(mapStateToProps)(AdFormReview);
