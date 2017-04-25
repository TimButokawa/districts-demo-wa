import {REQUEST_DISTRICTS, REQUEST_DISTRICTS_SUCCESS, REQUEST_DISTRICTS_FAILURE} from '../actions/districts';

const initialState = {
  data:[],
  isLoading: false
};

export default function districtsReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_DISTRICTS:
      return {
        ...state,
        isLoading: true
      }
    case REQUEST_DISTRICTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      }
    case REQUEST_DISTRICTS_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}
