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
import {formatDataForChart} from '../../utils/chart.utils';

class PopulationChart extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data || nextProps.chartType !== this.props.chartType;
  }

  render() {
    const {data, chartType} = this.props;
    const chartData = formatDataForChart(data);

    const chart = chartType === 'bar' ? (
      <BarChart data={chartData}>
        <Bar dataKey='population' fill='#4FC3F7'/>
        <XAxis dataKey='year' hide/>
        <Tooltip/>
      </BarChart>
    ) : (
      <AreaChart data={chartData}>
        <Area dataKey='population' fill='#4FC3F7'/>
        <XAxis dataKey='year' hide/>
        <Tooltip/>
      </AreaChart>
    );

    return (
      <ResponsiveContainer width="100%" height={150} debounce={1}>
        {chart}
      </ResponsiveContainer>
    );
  }
}

PopulationChart.propTypes = {
  data: PropTypes.object.isRequired,
  chartType: PropTypes.string.isRequired
};

export default PopulationChart;
