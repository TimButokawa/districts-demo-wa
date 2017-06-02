import {Map} from 'immutable'
import {REQUEST_DISTRICTS, REQUEST_DISTRICTS_SUCCESS, REQUEST_DISTRICTS_FAILURE, SHOW_MORE_DISTRICTS} from '../actions/districts';

const initialState = Map({
  data: [],
  visibleIndexes: [0, 8],
  isLoading: false
});

export default function districtsReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_DISTRICTS:
      return state.set('isLoading', true);
    case REQUEST_DISTRICTS_SUCCESS:
    return state.set('isLoading', false).set('data', action.payload.data);
    case REQUEST_DISTRICTS_FAILURE:
      return state.set('isLoading', false);
    case SHOW_MORE_DISTRICTS:
      const lastIndex = state.get('visibleIndexes')[1];
      return state.set('visibleIndexes', [0, lastIndex + action.payload]);
    default:
      return state;
  }
}
