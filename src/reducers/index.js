import {combineReducers} from 'redux';
import districtsReducer from './districts';
import districtsGeoReducer from './districts-geo';
import favoritesReducer from './favorites';
import interfaceReducer from './interface';

const rootReducer = combineReducers({
  districts: districtsReducer,
  districtsGeo: districtsGeoReducer,
  favorites: favoritesReducer,
  interface: interfaceReducer
});

export default rootReducer;
