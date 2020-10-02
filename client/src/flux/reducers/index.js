import { combineReducers } from 'redux';
import switchesReducer from './switchesReducer';
import switchDetailsReducer from './switchDetailsReducer';

export default combineReducers({
  keyboard: switchesReducer,
  switchDetails: switchDetailsReducer
});
