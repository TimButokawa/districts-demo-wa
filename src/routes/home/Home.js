import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
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
    const {districtsGeo, districts} = this.props;
    if (!districtsGeo.length) {
      this.props.districtGeoAction.requestDistrictsGeo();
    }

    if (!districts.length) {
      this.props.districtAction.requestDistricts();
    }
  }

  render() {
    const {districtsGeo, selectedDistrict, districts} = this.props;
    return (
      <div style={styles.container}>
        <Paper style={styles.aside}>
          <List>
            {districts.map((district, i) => {
              return (
                <div key={i}>
                  <ListItem
                    button
                    onClick={() => this.handleGetDistrictGeo(district.legislative_district)}>
                    <ListItemIcon>
                      {district.isAFavorite ?
                        <Favorite onClick={() => this.handleRemoveFavorite(district)} style={styles.favorite}/> :
                        <FavoriteBorder onClick={() => this.handleAddToFavorites(district)} style={styles.favorite}/>}
                    </ListItemIcon>
                    <ListItemText primary={'District ' + district.legislative_district}/>
                  </ListItem>
                  <Divider/>
                </div>
              );
            })}
          </List>
        </Paper>
        <div style={styles.mainContent}>
          {districtsGeo.length ? <DistrictMap districtsGeo={districtsGeo} districtGeo={selectedDistrict}/> : <Loader/>}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  districts: PropTypes.array,
  districtsGeo: PropTypes.array,
  selectedDistrict: PropTypes.array,
  districtGeoAction: PropTypes.object,
  districtActions: PropTypes.object,
  favoritesAction: PropTypes.object
}

export default Home;
