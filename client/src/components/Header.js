import React, {Component} from 'react';
import {connect} from 'react-redux';
class Header extends Component {
  renderContent(){
    switch (this.props.auth){
       case null:
          return;
       case false:
          return <li><a href="/auth/google" style={{color:'#5c0303'}}> Login with google </a></li>
       default:
          return <li><a href="/api/logout" style={{color:'#5c0303'}}>Logout</a></li>
          
    }
  }
  render(){ 
     //console.log(this.props);
     return(
       <nav>
          <div className="nav-wrapper" style={{ backgroundColor: '#ecc7c7'}}>
             <a className="left brand-logo" style={{color:'#5c0303'}}>
                adSender
       
             </a>
             <ul className ="right" >
                
                   {this.renderContent()}
                
             </ul>
          </div>
       </nav>
     );
  }
};

function mapStateToProps(state){
  return {auth:state.auth};
};
export default connect(mapStateToProps)(Header);

