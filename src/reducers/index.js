import {combineReducers} from 'redux';
import districtsReducer from './districts';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  districts: districtsReducer,
  favorites: favoritesReducer
});

export default rootReducer;
