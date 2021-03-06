import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';
class Header extends Component {
  renderContent(){
    switch (this.props.auth){
       case null:
          return;
       case false:
          return <li><a href="/auth/google" style={{color:'#5c0303'}}> Login with google </a></li>;
                 
       default:
          return [
                 <li key="1">
                   <Payments/>
                 </li>,
                 <li key ="3" style={{color:'#5c0303', margin: '0 10px'}}> 
                     Credits: {this.props.auth.credits}
                 </li>,
                 <li key="2"><a href="/api/logout" style={{color:'#5c0303'}}>
                     Logout</a>
                 </li>
                 
                 ];
    }
  }
  render(){ 
     //console.log(this.props);
     return(
       <nav>
          <div className="nav-wrapper" style={{ backgroundColor: '#ddc974'}}>
             <Link to={this.props.auth ? '/dashboard': '/'} className="left brand-logo" style={{color:'#5c0303'}} >
                adSender
       
             </Link>
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

