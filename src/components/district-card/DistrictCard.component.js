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
    const {item} = this.props;
    return (
      <Layout item xs={12} sm={6} md={3}>
        <Card>
          <CardHeader
            avatar={item.isAFavorite ? <Favorite/> : <FavoriteBorder/>}
            title={item.name}
            subheader={item.isAFavorite ?
              <span className="cursor-pointer" onClick={() => this.handleRemoveFavorite(item)}>remove from favorites</span> :
              <span className="cursor-pointer" onClick={() => this.handleAddToFavorites(item)}>add to favorites</span>
            }
            />
          <CardMedia>
            <img src="https://unsplash.it/720/200" alt=""/>
          </CardMedia>
          <CardContent>
            <Text type="headline" component="h2">{item.name}</Text>
            <Text component="p">{item.id}</Text>
          </CardContent>
        </Card>
      </Layout>
    );
  }
}

DistrictCard.propTypes = {
  action: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

export default DistrictCard;
