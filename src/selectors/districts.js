export function getDistricts(state) {
  return state.demographics.get('data');
}
export function getVisibleIndexes(state) {
  return state.demographics.get('visibleIndexes');
}
