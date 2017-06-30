export function getDistrictsGeo(state) {
  return state.districts.get('data');
}

export function getDistrictGeo(state) {
  return state.districts.get('selectedDistrict');
}
