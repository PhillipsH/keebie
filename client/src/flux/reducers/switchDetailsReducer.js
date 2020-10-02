import {
  SET_DETAILS,
  ITEMS_LOADING
} from '../actions/types';

const initialState = {
  details: '5f6d926275362bae1c88e367',
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_DETAILS:
      return {
        ...state,
        details: action.payload,
        loading: false
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
