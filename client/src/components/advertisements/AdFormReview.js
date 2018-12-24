import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';


const AdFormReview =({ onCancel, formValues })=>{

     const reviewFields = _.map(formFields, ({name, label}) =>{
        return (
          <div key={name}>
             <label>{label}</label>
             <div>
                {formValues[name]}
             </div>
          </div>
        );
     });
     return(
        <div> 
           <h5> Please confirm your input:</h5>
           {reviewFields}
           <button className="yellow darken-3 btn-flat"
              onClick={onCancel}
           >
             Back
           </ button>
        </div>
 
     );
  
};

function mapStateToProps(state){
  //console.log(state);
  return {
    formValues: state.form.advertisementForm.values
  };
};
export default connect(mapStateToProps)(AdFormReview);
