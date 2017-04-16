import ADD_FAVORITE from '../actions';

const initialState = [];

export default function favoritesReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_FAVORITE:
      return [...state, action.district]
    default:
      return state;
  }
}
