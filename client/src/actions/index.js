import axios from 'axios';
import {FETCH_USER, FETCH_AD} from './types';


export const fetchUser = () => async dispatch =>{
     const res = await axios.get('/api/current_user');
     dispatch ({type: FETCH_USER, payload: res.data});
    
};


export const handleToken = (token) => async dispatch =>{
     const res = await axios.post('/api/stripe', token);
     dispatch ({type: FETCH_USER, payload: res.data});
      
};

export const submitAdvertisement = (values, history) => async dispatch=>{
  
     const res = await axios.post('/api/dashboard', values,history);
      history.push('/dashboard');
     dispatch ({type: FETCH_USER, payload: res.data});
  
};

export const fetchAd = () =>async dispatch => {
    const res = await axios.get('/api/dashboard');
    dispatch ({type: FETCH_AD, payload: res.data});
};
