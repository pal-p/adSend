import React, {Component} from 'react';
import {connect} from 'react-redux';
class Header extends Component {
  
  render(){
     return(
       <nav>
          <div className="nav-wrapper" >
             <a className="left brand-logo">
                adSender
       
             </a>
             <ul className ="right">
                <li> 
                   <a>Login with Google </a>
                </li>
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

