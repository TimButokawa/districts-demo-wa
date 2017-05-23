import {Map} from 'immutable'
import {REQUEST_DISTRICTS_GEO, REQUEST_DISTRICTS_GEO_SUCCESS, REQUEST_DISTRICTS_GEO_FAILURE} from '../actions/districts-geo';

const initialState = Map({
  data:[],
  isLoading: false,
  map: null
});

export default function districtsGeoReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_DISTRICTS_GEO:
      return state.set('isLoading', true);
    case REQUEST_DISTRICTS_GEO_SUCCESS:
    return state.set('isLoading', false).set('data', action.payload.data);
    case REQUEST_DISTRICTS_GEO_FAILURE:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
