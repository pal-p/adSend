import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component{
   render(){
      //debugger;
      console.log('in payments:!',process.env.REACT_APP_STRIPE_KEY); 
      return(
         <StripeCheckout
             name="adSender"
             description="Pay $5 for 5 email credits"
             amount={500}
             token={token => console.log(token)}
             stripeKey={process.env.REACT_APP_STRIPE_KEY}/>

      );
   }

}
export default Payments;
