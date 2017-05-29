import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from 'material-ui/Layout';
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardHeader
} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Favorite from 'material-ui-icons/Favorite';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder';
import _ from 'lodash';
import PopulationChart from '../population-chart/PopulationChart.component';

const styles = {
  favorite: {
    color: '#F44336',
    cursor: 'pointer'
  }
};

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
    const title = 'District ' + district.legislative_district;
    const avatar = district.isAFavorite ?
      <Favorite onClick={() => this.handleRemoveFavorite(district)} style={styles.favorite}/> :
      <FavoriteBorder onClick={() => this.handleAddToFavorites(district)} style={styles.favorite}/>;

    return (
      <Layout item xs={12} sm={6} md={3}>
        <Card>
          <CardHeader
            avatar={avatar}
            title={title}
            subheader="Estimated total population 2000 - 2016"
            />
          <CardMedia>
            <PopulationChart data={district}/>
          </CardMedia>
          <CardContent>
            <ul style={styles.list}>
              <li><strong>Total Change 2000 - 2010: </strong>{district.numeric_change_in_population_2000_to_2010}</li>
              <li><strong>Total Change 2010 - 2015: </strong>{district.numeric_change_in_population_2010_to_2015}</li>
            </ul>
          </CardContent>
          <CardActions>
            <Button>Area chart</Button>
          </CardActions>
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
