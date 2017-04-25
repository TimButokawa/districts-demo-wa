import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  ResponsiveContainer
} from 'recharts';
import Layout from 'material-ui/Layout';
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader
} from 'material-ui/Card';
import Text from 'material-ui/Text';
import Favorite from 'material-ui-icons/Favorite';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder';
import _ from 'lodash';

class DistrictCard extends Component {
  constructor(props) {
    super(props);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
    this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this);
  }

  handleAddToFavorites(district) {
    this.props.action.addToFavorites(district);
  }

  handleRemoveFavorite(district) {
    this.props.action.removeFavorite(district)
  }

  render() {
    const {district} = this.props;
    const chartData = _formatDataForChart(district);

    return (
      <Layout item xs={12} sm={6} md={3}>
        <Card>
          <CardHeader
            avatar={district.isAFavorite ? <Favorite/> : <FavoriteBorder/>}
            title={district.isAFavorite ?
              <span className="cursor-pointer" onClick={() => this.handleRemoveFavorite(district)}>remove from favorites</span> :
              <span className="cursor-pointer" onClick={() => this.handleAddToFavorites(district)}>add to favorites</span>
            }
            />
          <CardMedia>
            <ResponsiveContainer width="100%" height={150} debounce={1}>
              <BarChart data={chartData}>
                <Bar isAnimationActive={false} dataKey='value' fill='#8884d8'/>
              </BarChart>
            </ResponsiveContainer>
          </CardMedia>
          <CardContent>
            <Text type="headline" component="h3">Legislative District {district.legislative_district}</Text>
          </CardContent>
        </Card>
      </Layout>
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

DistrictCard.propTypes = {
  action: PropTypes.object.isRequired,
  district: PropTypes.object.isRequired
};

export default DistrictCard;
