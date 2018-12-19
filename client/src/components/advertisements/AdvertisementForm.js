import React , {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
class AdvertisementForm extends Component {

  render(){

    return(
      <div> 
          adform!!!
          <Field
             type="text"
             name="adTitle"
             component="input"
          />
      </div>
    );
  }

}

export default reduxForm ({
  form:'advertisementForm'
})(AdvertisementForm);
