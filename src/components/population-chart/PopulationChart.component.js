import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from 'recharts';
import _ from 'lodash';

class PopulationChart extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const {chartType} = this.props;
    if (chartType !== nextProps.chartType) {
      return true;
    }

    return false;
  }

  render() {
    const {data, chartType} = this.props;
    const chartData = _formatDataForChart(data);

    return chartType === 'bar' ? (
      <ResponsiveContainer width="100%" height={150} debounce={1}>
        <BarChart data={chartData}>
          <Bar dataKey='population' fill='#4FC3F7'/>
          <XAxis dataKey='year' hide/>
          <Tooltip/>
        </BarChart>
      </ResponsiveContainer>
    ) : (
      <ResponsiveContainer width="100%" height={150} debounce={1}>
        <AreaChart data={chartData}>
          <Area dataKey='population' fill='#4FC3F7'/>
          <XAxis dataKey='year' hide/>
          <Tooltip/>
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

function _formatDataForChart(data) {
  const chartData = [];

  _.forEach(data, (v, k) => {
    if(_.includes(k, 'estimated_total_population_')) {
      const index = _.lastIndexOf(k, '_');
      const year = _.parseInt(k.substr(index + 1));
      const population = _.parseInt(v);
      chartData.push({
        year,
        population
      })
    }
  });

  return chartData;
}

PopulationChart.propTypes = {
  data: PropTypes.object.isRequired,
  chartType: PropTypes.string.isRequired
};

export default PopulationChart;
