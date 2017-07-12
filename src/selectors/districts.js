export function getDistrictsDemo(state) {
  return state.demographics.get('data');
}

export function getDistrictDemo(state) {
  return state.demographics.get('selectedDemographics');
}
