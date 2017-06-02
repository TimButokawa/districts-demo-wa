export const TOGGLE_CHART= 'TOGGLE_CHART';

export function toggleChart(chartType) {
  return {
    type: TOGGLE_CHART,
    chartType
  };
}
