import {combineReducers} from 'redux';
import districtsReducer from './districts';
import districtsGeoReducer from './districts-geo';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  districts: districtsReducer,
  districtsGeo: districtsGeoReducer,
  favorites: favoritesReducer
});

export default rootReducer;
