export const SHOW_ALL_FAVORITES= 'SHOW_ALL_FAVORITES';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const REMOVE_ALL_FAVORITES = 'REMOVE_ALL_FAVORITES';

export function viewFavoriteDistricts() {
  return {
    type: SHOW_ALL_FAVORITES
  };
}

export function addToFavorites(district) {
  return {
    type: ADD_FAVORITE,
    district
  };
}

export function removeFavorite(district) {
  return {
    type: REMOVE_FAVORITE,
    district
  };
}

export function removeFavorites(districts) {
  return {
    type: REMOVE_ALL_FAVORITES,
    districts
  };
}
