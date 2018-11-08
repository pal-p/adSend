import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';

const Dashboard= () => <h2>dashboard! </h2>;
const SurveyNew= () => <h2>surveynew! </h2>;
const Landing= () => <h2>jigarak landing! </h2>;



const App = () => {
  
  return(
    <div className ="container">
      <BrowserRouter>
       <div >
          <Header />
          <Route exact path="/" component = {Landing}/>
          <Route exact path="/surveys" component = {Dashboard}/>
          <Route  path="/surveys/new" component = {SurveyNew}/>
       
       </div>
      </BrowserRouter>
     </div>
     );
   
};

export default App;
