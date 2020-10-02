import axios from 'axios';
import { GET_SWITCHES, ITEMS_LOADING, SET_DETAILS, FILTER_SWITCHES_NAME, FILTER_SWITCHES_TYPE } from './types';

export const getSwitches = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/switches')
    .then(res =>
      dispatch({
        type: GET_SWITCHES,
        payload: res.data
      })
    );
};
export const filterSwitchesName = (searchName) => dispatch => {
  console.log("filtering switches")
  dispatch(setItemsLoading());
  dispatch({
    type: FILTER_SWITCHES_NAME,
    payload: searchName
  })
};
export const filterSwitchesType = (searchName) => dispatch => {
  console.log("filtering switches")
  dispatch(setItemsLoading());
  dispatch({
    type: FILTER_SWITCHES_TYPE,
    payload: searchName
  })
};
export const setDetails = (id) => dispatch => {
  console.log("setting Details")
  dispatch({
    type: SET_DETAILS,
    payload: id
  })
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

