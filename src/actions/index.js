export const REQUEST_DISTRICTS = 'REQUEST_DISTRICTS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const REMOVE_ALL_FAVORITES = 'REMOVE_ALL_FAVORITES';

export function requestDistricts() {
  return {
    type: REQUEST_DISTRICTS
  }
}

export function addToFavorites(district) {
  return {
    type: ADD_FAVORITE,
    district
  }
}

export function removeFavorite(district) {
  return {
    type: REMOVE_FAVORITE,
    district
  }
}

export function removeFavorites() {
  return {
    type: REMOVE_ALL_FAVORITES
  }
}
