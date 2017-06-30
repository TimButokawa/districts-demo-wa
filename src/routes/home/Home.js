import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Favorite from 'material-ui-icons/Favorite';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder';
import DistrictMap from '../../components/district-map/DistrictMap.component';
import Loader from '../../components/loader/Loader.component';

const styles = {
  container: {
    height: '100%',
    display: 'flex',
  },
  aside: {
    overflowX: 'scroll',
    minWidth: '200px'
  },
  mainContent: {
    flexGrow: '1',
    padding: '16px'
  },
  favorite: {
    color: '#F44336',
    cursor: 'pointer'
  }
};

class Home extends Component {
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

  componentWillMount() {
    const {districts} = this.props;
    if (!districts.length) {
      this.props.districtGeoAction.requestDistrictsGeo();
    }
  }

  render() {
    const {districts, selectedDistrict, favorites, displayFavorites} = this.props;
    return (
      <div style={styles.container}>
        <Paper
          square
          style={styles.aside}>
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
        </Paper>
        <div style={styles.mainContent}>
          {districts.length ?
            <DistrictMap
              displayFavorites={displayFavorites}
              districts={districts}
              selectedDistrict={selectedDistrict}
              favorites={favorites}/> : <Loader/>}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  districts: PropTypes.array,
  selectedDistrict: PropTypes.array,
  favorites: PropTypes.array,
  districtGeoAction: PropTypes.object,
  favoritesAction: PropTypes.object,
  displayFavorites: PropTypes.bool
}

export default Home;
