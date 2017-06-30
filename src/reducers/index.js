import {combineReducers} from 'redux';
import districtsReducer from './districts';
import districtsGeoReducer from './districts-geo';
import favoritesReducer from './favorites';
import interfaceReducer from './interface';

const rootReducer = combineReducers({
  demographics: districtsReducer,
  districts: districtsGeoReducer,
  favorites: favoritesReducer,
  interface: interfaceReducer
});

export default rootReducer;
