import React , {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
class AdvertisementForm extends Component {

  render(){

    return(
      <div> 
        adform!!!
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field
             type="text"
             name="adTitle"
             component="input"
          />
          <button type="submit">Submit</button>
        </ form>
      </div>
    );
  }

}

export default reduxForm ({
  form:'advertisementForm'
})(AdvertisementForm);
