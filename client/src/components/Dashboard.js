import React from 'react';
import {Link} from 'react-router-dom';
import AdList from './advertisements/AdList';



const Dashboard = () => {
  return (
   <div style={{backgroundColor:'#ffcc80'}} > 
    <AdList />
    <div className="fixed-action-btn">
      <Link to="/dashboard/new" className="btn-floating btn-large red">
      <i className="material-icons">add</i>
     </Link>
    </div> 
   </div>
  );

};

export default Dashboard;
