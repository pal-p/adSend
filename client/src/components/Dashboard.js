import React from 'react';
import {Link} from 'react-router-dom';
const Dashboard = () => {
  return (
   <div style={{ backgroundColor: '#e1d084'}
}> Dashboard ! ! 
    <div className="fixed-action-btn">
      <Link to="/dashboard/new" className="btn-floating btn-large red">
      <i className="material-icons">add</i>
     </Link>
    </div> 
   </div>
  );

};

export default Dashboard;
