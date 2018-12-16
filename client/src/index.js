import React from'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

import App from './components/App';
import reducers from './reducers';

//for testing only
import axios from 'axios';
window.axios = axios;


const store = createStore(reducers,{}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));

console.log('STRIPEEEEEE KEY', process.env.REACT_APP_STRIPE_KEY);
console.log('NODE ENVVVVVVVVV' , process.env.NODE_ENV);
