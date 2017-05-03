import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
import PopulationChart from '../population-chart/PopulationChart.component';

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
            <PopulationChart data={district}/>
          </CardMedia>
          <CardContent>
            <Text type="headline" component="h3">Legislative District {district.legislative_district}</Text>
          </CardContent>
        </Card>
      </Layout>
    );
  }
}

DistrictCard.propTypes = {
  action: PropTypes.object.isRequired,
  district: PropTypes.object.isRequired
};

export default DistrictCard;
