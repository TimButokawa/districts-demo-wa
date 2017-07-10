import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List, {ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Favorite from 'material-ui-icons/Favorite';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder';

const styles = {
  favorite: {
    color: '#F44336',
    cursor: 'pointer'
  }
};

class DistrictList extends Component {
  constructor(props) {
    super(props);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
    this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this);
    this.handleGetDistrictGeo = this.handleGetDistrictGeo.bind(this);
  }

  handleAddToFavorites(district) {
    this.props.favoritesAction.addToFavorites(district);
  }

  handleRemoveFavorite(district) {
    this.props.favoritesAction.removeFavorite(district)
  }

  handleGetDistrictGeo(district) {
    this.props.districtGeoAction.getDistrictGeo(district);
  }

  render() {
    const {districts} = this.props;
    return (
      <List disablePadding>
        {districts.map((district, i) => {
          return (
              <ListItem
                key={i}
                button
                divider
                onClick={() => this.handleGetDistrictGeo(district.district)}>
                <ListItemIcon>
                  {district.isAFavorite ?
                    <Favorite onClick={() => this.handleRemoveFavorite(district)} style={styles.favorite}/> :
                    <FavoriteBorder onClick={() => this.handleAddToFavorites(district)} style={styles.favorite}/>}
                </ListItemIcon>
                <ListItemText primary={district.name}/>
              </ListItem>
          );
        })}
      </List>
    );
  }
}

DistrictList.propTypes = {
  districts: PropTypes.array.isRequired,
  favoritesAction: PropTypes.object.isRequired,
  districtGeoAction: PropTypes.object.isRequired
};

export default DistrictList;
