import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardActions,
  CardHeader
} from 'material-ui/Card';
import Button from 'material-ui/Button';

const styles = {
  header: {
    flexDirection: 'column',
    alignItems: 'start'
  },
  button: {
    color: '#4FC3F7',
    backgroundColor: '#FEFEFE'
  }
};

class DistrictCard extends Component {
  constructor(props) {
    super(props);
    this.handleToggleChart = this.handleToggleChart.bind(this);
  }

  handleToggleChart() {
    const {action, chartType} = this.props;
    action.toggleChart(chartType);
  }

  render() {
    const {district} = this.props;
    const title = 'District ' + district.district;

    return (
      <Card raised>
        <CardHeader
          style={styles.header}
          title={title}
          subheader="Estimated total population 2000 - 2016"/>
        <CardMedia>
          {this.props.children}
        </CardMedia>
        <CardActions>
          <Button
            style={styles.button}
            raised
            onClick={() => this.handleToggleChart()}>Toggle Chart Type</Button>
        </CardActions>
      </Card>
    );
  }
}

DistrictCard.propTypes = {
  action: PropTypes.object.isRequired,
  chartType: PropTypes.string.isRequired,
  district: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default DistrictCard;
