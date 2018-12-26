import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAd} from '../../actions';

class AdList extends Component {
   
   componentDidMount(){
     this.props.fetchAd();
   }
   renderAds () {
    return this.props.advertisements.map(ad =>{
      return (
        <div className="card darken-1">
          <div className="card-content">
            <span className="card-title">{ad.title}</span>
            <p>{ad.body}</p>
          </div>
          <div className="card-action">
           
          </div>
        </div>
      );
    });
  }
   render(){
     return<div>{this.renderAds()}</div>
   }
}

function mapStateToProps(state){
  return {
    advertisements: state.advertisements
  };
};

export default connect(mapStateToProps, {fetchAd})(AdList);
