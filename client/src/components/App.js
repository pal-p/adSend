import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Dashboard from './Dashboard';
import AdvertisementNew from './advertisements/AdvertisementNew';

class App extends Component {

   componentDidMount(){
        
     this.props.fetchUser();
   }

   render(){
  
	  return(
	    <div>
	      <BrowserRouter>
	       <div className ="container">
		  <Header />
		  <Route exact path="/" component = {Landing}/>
		  <Route exact path="/dashboard" component = {Dashboard}/>
		  <Route  path="/dashboard/new" component = {AdvertisementNew}/>
	       
	       </div>
	      </BrowserRouter>
	     </div>
	     );
   }
};

export default connect (null, actions)(App);
