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

class Districts extends Component {
  constructor(props) {
    super(props);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
    this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this);
    this.handleRemoveFavorites = this.handleRemoveFavorites.bind(this);
  }

  handleAddToFavorites(district) {
    this.props.action.addToFavorites(district);
  }

  handleRemoveFavorite(district) {
    this.props.action.removeFavorite(district)
  }

  handleRemoveFavorites() {
    this.props.action.removeFavorites()
  }

  render() {
    const {districts, favorites} = this.props;
    const content = districts.map(district => {
      return (
        <Layout key={district.id} item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              avatar={district.isAFavorite ? <Favorite/> : <FavoriteBorder/>}
              title={district.name}
              subheader={district.isAFavorite ?
                <span className="cursor-pointer" onClick={() => this.handleRemoveFavorite(district)}>remove from favorites</span> :
                <span className="cursor-pointer" onClick={() => this.handleAddToFavorites(district)}>add to favorites</span>
              }
              />
            <CardMedia>
              <img src="https://unsplash.it/720/200" alt=""/>
            </CardMedia>
            <CardContent>
              <Text type="headline" component="h2">{district.name}</Text>
              <Text component="p">
                {district.id}
              </Text>
            </CardContent>
          </Card>
        </Layout>
      )
    });

    return (
      <Layout container gutter={16}>
        <Layout item xs={12}>
          <span>Favorites: {favorites.length}</span><br/>
          <span className="cursor-pointer" onClick={() => this.handleRemoveFavorites()}>Clear Favorites</span>
        </Layout>
        {content}
      </Layout>
    );
  }
}

Districts.propTypes = {
  action: PropTypes.object,
  districts: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired
};

export default Districts;
