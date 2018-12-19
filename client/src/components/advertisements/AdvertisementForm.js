import React , {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import AdvertisementField from './AdvertisementField';

class AdvertisementForm extends Component {
  
  renderFields (){
    return (
       <div>
        <Field label="Ad Title" type="text" name="title"  component={AdvertisementField} />       
        <Field label="Subject Line" type="text" name="subject"  component={AdvertisementField} />
        <Field label="Email Body" type="text" name="body"  component={AdvertisementField} />
        <Field label="Recipients List" type="text" name="recipients"  component={AdvertisementField} />
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
