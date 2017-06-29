import {Map} from 'immutable'
import {
  REQUEST_DISTRICTS_GEO,
  REQUEST_DISTRICTS_GEO_SUCCESS,
  REQUEST_DISTRICTS_GEO_FAILURE,
  GET_DISTRICT_GEO,
  GET_FAVORITE_DISTRICTS_GEO} from '../actions/districts-geo';
import {filter} from 'lodash';

const initialState = Map({
  data:[],
  selectedDistrict: [],
  favoriteDistricts: [],
  isLoading: false
});

export default function districtsGeoReducer(state = initialState, action) {
  const districts = state.get('data');
  switch(action.type) {
    case REQUEST_DISTRICTS_GEO:
      return state.set('isLoading', true);
    case REQUEST_DISTRICTS_GEO_SUCCESS:
      return state.set('isLoading', false).set('data', action.payload.data);
    case REQUEST_DISTRICTS_GEO_FAILURE:
      return state.set('isLoading', false);
    case GET_DISTRICT_GEO:
      return state.set('selectedDistrict', filter(districts, function(o) {
        return parseInt(o.district, 10) === parseInt(action.district, 10);
      }));
    case GET_FAVORITE_DISTRICTS_GEO:
      return state.set('favoriteDistricts', filter(districts, o => o.isAFavorite));
    default:
      return state;
  }
}
