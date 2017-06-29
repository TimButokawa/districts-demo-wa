import {Map} from 'immutable'
import {TOGGLE_CHART, TOGGLE_DISPLAY_FAVORITES} from '../actions/interface';

const initialState = Map({
  chartType: 'bar',
  displayFavorites: false
});

export default function interfaceReducer(state = initialState, payload) {
  switch(payload.type) {
    case TOGGLE_CHART:
      return payload.chartType === 'bar' ? state.set('chartType', 'area') : state.set('chartType', 'bar');
    case TOGGLE_DISPLAY_FAVORITES:
      return state.get('displayFavorites') ? state.set('displayFavorites', false) :  state.set('displayFavorites', true);
    default:
      return state;
  }
}
