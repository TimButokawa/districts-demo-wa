import {ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_ALL_FAVORITES, SHOW_ALL_FAVORITES} from '../actions/favorites';
import _ from 'lodash';

const initialState = {
  displayFavorites: false,
  data: []
};

export default function favoritesReducer(state = initialState, payload) {
  switch(payload.type) {
    case ADD_FAVORITE:
      payload.district.isAFavorite = true;
      return {
        ...state,
        data: [...state.data, payload.district]
      }

    case REMOVE_FAVORITE:
      const index = _.findIndex(state.data, o => {
        return o.id === payload.district.id;
      });

      payload.district.isAFavorite = false;
      return {
        ...state,
        data: state.data.filter((_, i) => i !== index)
      }

    case REMOVE_ALL_FAVORITES:
      _.forEach(state.data, o => {
        o.isAFavorite = false
      });

      return initialState;

    case SHOW_ALL_FAVORITES:
      return {
        ...state,
        displayFavorites: true
      }

    default:
      return state;
  }
}
