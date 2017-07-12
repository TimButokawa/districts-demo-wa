import {Map} from 'immutable'
import {
    REQUEST_DISTRICTS_DEMO,
    REQUEST_DISTRICTS_DEMO_SUCCESS,
    REQUEST_DISTRICTS_DEMO_FAILURE,
    GET_DISTRICT_DEMO
} from '../actions/districts';
import {find} from 'lodash';

const initialState = Map({
  data: [],
  selectedDemographics: {},
  isLoading: false
});

export default function districtsReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_DISTRICTS_DEMO:
      return state.set('isLoading', true);
    case REQUEST_DISTRICTS_DEMO_SUCCESS:
    return state.set('isLoading', false).set('data', action.payload.data);
    case REQUEST_DISTRICTS_DEMO_FAILURE:
      return state.set('isLoading', false);
    case GET_DISTRICT_DEMO:
      const demographics = state.get('data');
      return state.set('selectedDemographics', find(demographics, function(o) {
        return parseInt(o.legislative_district, 10) === parseInt(action.district, 10);
      }));
    default:
      return state;
  }
}
