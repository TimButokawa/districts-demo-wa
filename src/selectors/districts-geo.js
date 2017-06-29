export function getDistrictsGeo(state) {
  return state.districtsGeo.get('data');
}

export function getDistrictGeo(state) {
  return state.districtsGeo.get('selectedDistrict');
}
