import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAd} from '../../actions';

class AdList extends Component {
   
   componentDidMount(){
     this.props.fetchAd();
   }
   render(){
     return(<div> ad list goes here!</div>);
   }
}

function mapStateToProps(state){
  return {
    advertisements: state.advertisements
  };
};

export default connect(mapStateToProps, {fetchAd})(AdList);
