import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';

const AdFormReview =({ onCancel, formValues, submitAdvertisement, history })=>{

     const reviewFields = _.map(formFields, ({name, label}) =>{
        return (
          <div key={name} >
             <label className="brown-text">{label}</label>
             <div>
                {formValues[name]}
             </div>
          </div>
        );
     });
     return(
        <div style={{backgroundColor:'#ffcc80'}}> 
           <h5  style={{color:'#b34700'}}>  Please confirm your input:</h5>
           {reviewFields}
           <button className="yellow darken-3 btn-flat"
                   onClick={onCancel}
           >
             Back
           </ button>
           <button className="green btn-flat right"
                   onClick={()=> submitAdvertisement(formValues, history)}
           >
             Send
             <i className="material-icons right">email</i>
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
export default connect(mapStateToProps, actions)(withRouter(AdFormReview));
