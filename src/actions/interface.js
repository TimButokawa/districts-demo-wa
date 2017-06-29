export const TOGGLE_CHART= 'TOGGLE_CHART';
export const TOGGLE_DISPLAY_FAVORITES = 'TOGGLE_DISPLAY_FAVORITES';

export function toggleChart(chartType) {
  return {
    type: TOGGLE_CHART,
    chartType
  };
}

export function toggleDisplayFavorites() {
  return {
    type: TOGGLE_DISPLAY_FAVORITES
  };
}
