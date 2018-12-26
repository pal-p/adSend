import {combineReducers} from 'redux';
import authReducer from './authReducer';
//import form reducer from reduxForm
import {reducer as reduxForm } from 'redux-form';
import advertisementReducer from './advertisementReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  advertisements: advertisementReducer
});
