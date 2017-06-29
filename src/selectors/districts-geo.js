export function getDistrictsGeo(state) {
  return state.districtsGeo.get('data');
}

export function getDistrictGeo(state) {
  return state.districtsGeo.get('selectedDistrict');
}

export function getFavoriteDistrictsGeo(state) {
  return state.districtsGeo.get('favoriteDistricts');
}
