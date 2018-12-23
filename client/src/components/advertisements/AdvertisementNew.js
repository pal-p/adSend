//shows AdvertisementForm and AdvertisementFormReview

import React , {Component} from 'react';
import AdvertisementForm from './AdvertisementForm';
import AdFormReview from './AdFormReview';

class AdvertisementNew extends Component {
 
  //component level state via create react app
  state = { showFormReview: false };
  
  renderContent(){ 
    
     if(this.state.showFormReview){
       return <AdFormReview />
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

export default AdvertisementNew;
