export const REQUEST_DISTRICTS = 'REQUEST_DISTRICTS';
export const ADD_FAVORITE = 'ADD_FAVORITE';

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
