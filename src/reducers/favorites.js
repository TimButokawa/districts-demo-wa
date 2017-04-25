import {ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_ALL_FAVORITES, SHOW_ALL_FAVORITES} from '../actions/favorites';
import _ from 'lodash';

const initialState = {
  displayFavorites: false
};

export default function favoritesReducer(state = initialState, payload) {
  switch(payload.type) {
    case ADD_FAVORITE:
      payload.district.isAFavorite = true;
      return {
        ...state
      };

    case REMOVE_FAVORITE:
      payload.district.isAFavorite = false;
      return {
        ...state
      };

    case REMOVE_ALL_FAVORITES:
      _.forEach(payload.districts, o => {
        o.isAFavorite = false
      });

      return initialState;

    case SHOW_ALL_FAVORITES:
      return {
        ...state,
        displayFavorites: true
      };

    default:
      return state;
  }
}
