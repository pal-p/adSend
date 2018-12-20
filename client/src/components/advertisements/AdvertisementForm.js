import _ from 'lodash';
import React , {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import AdvertisementField from './AdvertisementField';
import {Link} from 'react-router-dom';
const FIELDS = [
  { label:'Ad Title', name:'title',noValueError: 'You must provide a title'},
  { label:'Subject Line', name:'subject', noValueError: 'You must provide a subject'},
  { label:'Email Body', name:'body', noValueError: 'You must provide a body'},
  { label:'Recipient List', name:'emails', noValueError: 'You must provide emails'}
];
class AdvertisementForm extends Component {
  
  renderFields (){
    return _.map(FIELDS, ({label, name}) =>{
        return <Field key={name} component={AdvertisementField} type="text" label={label} name={name}/>
     });
  }
  
  render(){

    return(
      <div> 
        
        <form  style={{ border: '5px solid #663300' , backgroundColor: '#ffcc80'}}onSubmit={this.props.handleSubmit(values => console.log(values))}>
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
   _.each (FIELDS, ({name, noValueError})=> {
      if(!values[name]){
         errors[name] = noValueError;
      }
   });
   return errors;
};
export default reduxForm ({
  validate: validate,
  form:'advertisementForm'
})(AdvertisementForm);
