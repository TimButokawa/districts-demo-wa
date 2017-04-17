import {ADD_FAVORITE} from '../actions';
import {REMOVE_FAVORITE} from '../actions';
import {REMOVE_ALL_FAVORITES} from '../actions';
import _ from 'lodash';

const initialState = [];

export default function favoritesReducer(state = initialState, payload) {
  switch(payload.type) {
    case ADD_FAVORITE:
      payload.district.isAFavorite = true;
      return [...state, payload.district];

    case REMOVE_FAVORITE:
      const index = _.findIndex(state, o => {
        return o.id === payload.district.id;
      });

      payload.district.isAFavorite = false;
      return state.filter((_, i) => i !== index);

    case REMOVE_ALL_FAVORITES:
      _.forEach(state, o => {
        o.isAFavorite = false
      });

      return initialState;

    default:
      return state;
  }
}
