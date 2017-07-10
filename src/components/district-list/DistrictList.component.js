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
    const {districts, selectedDistrict} = this.props;
    const activeDistrict = selectedDistrict.length ? selectedDistrict[0].district : [];
    return (
      <List disablePadding>
        {districts.map((district, i) => {
          return (
              <ListItem
                key={i}
                button
                divider
                onClick={() => this.handleGetDistrictGeo(district.district)}
                style={{
                  background: activeDistrict === district.district ? 'rgba(0, 0, 0, 0.12)' : 'none'
                }}>
                <ListItemText primary={district.name}/>
                <ListItemSecondaryAction>
                  <IconButton disableRipple>
                    {district.isAFavorite ?
                      <Favorite onClick={() => this.handleRemoveFavorite(district)} style={styles.favorite}/> :
                      <FavoriteBorder onClick={() => this.handleAddToFavorites(district)} style={styles.favorite}/>}
                  </IconButton>
                </ListItemSecondaryAction>
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
  districtGeoAction: PropTypes.object.isRequired,
  selectedDistrict: PropTypes.array.isRequired,
};

export default DistrictList;
