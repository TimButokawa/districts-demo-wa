import {forEach, lastIndexOf, parseInt, includes} from 'lodash';

export const formatDataForChart = data => {
  const chartData = [];

  forEach(data, (v, k) => {
    if(includes(k, 'estimated_total_population_')) {
      const index = lastIndexOf(k, '_');
      const year = parseInt(k.substr(index + 1));
      const population = parseInt(v);
      chartData.push({
        year,
        population
      })
    }
  });

  return chartData;
};
