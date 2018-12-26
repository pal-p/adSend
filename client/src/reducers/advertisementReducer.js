import {FETCH_AD} from '../actions/types';

export default function (state = [],action){
 
 switch(action.type){
   case FETCH_AD:
     return action.payload ;
   default:
     return state;
 }
}
