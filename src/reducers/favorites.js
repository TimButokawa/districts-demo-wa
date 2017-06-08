import {ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_ALL_FAVORITES} from '../actions/favorites';
import {indexOf, forEach} from 'lodash';

const initialState = {
  data: []
};

export default function favoritesReducer(state = initialState, payload) {
  switch(payload.type) {
    case ADD_FAVORITE:
      payload.district.isAFavorite = true;
      return {
        data: [...state.data, payload.district.legislative_district]
      };

    case REMOVE_FAVORITE:
      payload.district.isAFavorite = false;
      const index = indexOf(state.data, payload.district.legislative_district)
      return {
        data: [
          ...state.data.slice(0, index),
          ...state.data.slice(index + 1)
        ]
      };

    case REMOVE_ALL_FAVORITES:
      forEach(payload.districts, o => {
        o.isAFavorite = false
      });

      return initialState;

    default:
      return state;
  }
}
