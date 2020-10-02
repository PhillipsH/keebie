import {
  FILTER_SWITCHES_NAME,
  FILTER_SWITCHES_TYPE,
  GET_SWITCHES,
  ITEMS_LOADING
} from '../actions/types';
  
const initialState = {
  switches: [],
  currentSwitches:[],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SWITCHES:
      return {
        ...state,
        currentSwitches: action.payload, 
        switches: action.payload,
        loading: false
      };
    case FILTER_SWITCHES_NAME:
      const switchItem = state.switches.filter(({switchName}) => switchName.toUpperCase().includes(action.payload.toUpperCase()));
      return {
        ...state,
        currentSwitches: switchItem, 
        loading: false
      };
    case FILTER_SWITCHES_TYPE:
      const switchType = state.switches.filter(({switchType}) => switchType.toUpperCase().includes(action.payload.toUpperCase()));
      return {
        ...state,
        currentSwitches: switchType, 
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
  