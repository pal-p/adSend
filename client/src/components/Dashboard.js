import React from 'react';
import {Link} from 'react-router-dom';
const Dashboard = () => {
  return (
   <div style={{ backgroundColor: '#e1d084'}
}> Dashboard ! ! 
    <div class="fixed-action-btn">
      <Link to="/dashboard/new" class="btn-floating btn-large red">
      <i class="material-icons">add</i>
     </Link>
    </div> 
   </div>
  );

};

export default Dashboard;
