import _ from 'lodash';
import React , {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import AdvertisementField from './AdvertisementField';
import validateEmails from '../../utils/validateEmails';
import {Link} from 'react-router-dom';
import formFields from './formFields';
class AdvertisementForm extends Component {
  
  renderFields (){
    return _.map(formFields, ({label, name}) =>{
        return <Field key={name} component={AdvertisementField} type="text" label={label} name={name}/>
     });
  }
  
  render(){

    return(
      <div> 
        
        <form  style={{ border: '5px solid #663300' , backgroundColor: '#ffcc80'}}  onSubmit={this.props.handleSubmit(this.props.onAdSubmit)}>
          <div> 
              {this.renderFields()} 
          </div>
          
          <Link to="/dashboard" className="red btn-flat white-text"> 
                Cancel
                < i className="material-icons right">clear</i>
          </Link>
          <button type="submit" className="green btn-flat right white-text">Next
              < i className="material-icons right">done</i>
          </button>
          
        </ form>
      </div>
    );
  }

}

function validate (values){

   const errors ={};
   errors.emails = validateEmails(values.emails||'');
   _.each (formFields, ({name, noValueError})=> {
      if(!values[name]){
         errors[name] = noValueError;
      }
   });
  
   return errors;
};
export default reduxForm ({
  validate,
  form:'advertisementForm',
  destroyOnUnmount: false
})(AdvertisementForm);
