import React , {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import AdvertisementField from './AdvertisementField';

class AdvertisementForm extends Component {
  
  renderFields (){
    return (
       <div>
        <Field type="text" name="title" component={AdvertisementField} /> 
       </div>
    );
  }
  render(){

    return(
      <div> 
        adform!!!
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </ form>
      </div>
    );
  }

}

export default reduxForm ({
  form:'advertisementForm'
})(AdvertisementForm);
