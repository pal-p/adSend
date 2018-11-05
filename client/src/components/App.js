import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const Header = () => <h2>header! </h2>;
const Dashboard= () => <h2>dashboard! </h2>;
const SurveyNew= () => <h2>surveynew! </h2>;
const Landing= () => <h2>jigarak landing! </h2>;



const App = () => {
  
     return(
      <BrowserRouter>
       <div>
          <Header />
          <Route exact path="/" component = {Landing}/>
          <Route exact path="/surveys" component = {Dashboard}/>
          <Route  path="/surveys/new" component = {SurveyNew}/>
       
       </div>
      </BrowserRouter>
     );
   
};

export default App;
