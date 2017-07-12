import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader
} from 'material-ui/Card';

const styles = {
  header: {
    flexDirection: 'column',
    alignItems: 'start'
  }
};

class DistrictCard extends Component {

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
        <CardContent>
          content
        </CardContent>
      </Card>
    );
  }
}

DistrictCard.propTypes = {
  action: PropTypes.object.isRequired,
  district: PropTypes.object.isRequired,
  chartType: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default DistrictCard;
