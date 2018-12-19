import _ from 'lodash';
import React , {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import AdvertisementField from './AdvertisementField';

const FIELDS = [
  { label:'Ad Title', name:'title'},
  { label:'Subject Line', name:'subject'},
  { label:'Email Body', name:'body'},
  { label:'Recipient List', name:'emails'}
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
        adform!!!
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit" className="green btn-flat right white-text">Submit
              < i className="material-icons right">done</i>
          </button>
        </ form>
      </div>
    );
  }

}

export default reduxForm ({
  form:'advertisementForm'
})(AdvertisementForm);
