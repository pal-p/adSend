//shows AdvertisementForm and AdvertisementFormReview

import React , {Component} from 'react';
import AdvertisementForm from './AdvertisementForm';
import AdFormReview from './AdFormReview';
import {reduxForm} from 'redux-form';

class AdvertisementNew extends Component {
 
  //component level state via create react app
  state = { showFormReview: false };
  
  renderContent(){ 
    
     if(this.state.showFormReview){
       return <AdFormReview onCancel={()=>this.setState({showFormReview: false})}/>;
     }
     else{
       return <AdvertisementForm onAdSubmit={()=> this.setState({showFormReview: true})}/>;
     }
 
  }
  render(){

    return(
      <div> 
            {this.renderContent()}
      </div>
      
    );
  }

}

export default  reduxForm({ form: 'advertisementForm'})(AdvertisementNew);
