import {Map} from 'immutable'
import {TOGGLE_CHART} from '../actions/interface';

const initialState = Map({
  chartType: 'bar'
});

export default function interfaceReducer(state = initialState, payload) {
  switch(payload.type) {
    case TOGGLE_CHART:
      return payload.chartType === 'bar' ? state.set('chartType', 'area') : state.set('chartType', 'bar');
    default:
      return state;
  }
}
