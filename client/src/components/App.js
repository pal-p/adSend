import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Dashboard from './Dashboard';
const DashboardNew= () => <h2>adnew! </h2>;

class App extends Component {

   componentDidMount(){
        
     this.props.fetchUser();
   }

   render(){
  
	  return(
	    <div className ="container">
	      <BrowserRouter>
	       <div >
		  <Header />
		  <Route exact path="/" component = {Landing}/>
		  <Route exact path="/dashboard" component = {Dashboard}/>
		  <Route  path="/dashboard/new" component = {DashboardNew}/>
	       
	       </div>
	      </BrowserRouter>
	     </div>
	     );
   }
};

export default connect (null, actions)(App);
