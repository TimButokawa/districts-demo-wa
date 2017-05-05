import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  ResponsiveContainer
} from 'recharts';
import _ from 'lodash';

class PopulationChart extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {data} = this.props;
    const chartData = _formatDataForChart(data);
    return (
      <ResponsiveContainer width="100%" height={150} debounce={1}>
        <BarChart data={chartData}>
          <Bar dataKey='value' fill='#4FC3F7'/>
        </BarChart>
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
        value: population
      })
    }
  });

  return chartData;
}

PopulationChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default PopulationChart;
