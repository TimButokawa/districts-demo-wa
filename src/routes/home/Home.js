import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Favorite from 'material-ui-icons/Favorite';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder';
import Map from '../../components/district-map/DistrictMap.component';

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
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
    this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this);
  }

  handleAddToFavorites(district) {
    this.props.favoritesAction.addToFavorites(district);
  }

  handleRemoveFavorite(district) {
    this.props.favoritesAction.removeFavorite(district)
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
    const {districtsGeo, districts, favoritesAction} = this.props;

    return (
      <div style={styles.container}>
        <Paper style={styles.aside}>
          <List>
            {districts.map((district, i) => {
              return (
                <ListItem
                  key={i}>
                  <ListItemIcon>
                    {district.isAFavorite ?
                      <Favorite onClick={() => this.handleRemoveFavorite(district)} style={styles.favorite}/> :
                      <FavoriteBorder onClick={() => this.handleAddToFavorites(district)} style={styles.favorite}/>}
                  </ListItemIcon>
                  <ListItemText primary={'District ' + district.legislative_district}/>
                </ListItem>
              );
            })}
          </List>
        </Paper>
        <div style={styles.mainContent}>
          <Map districtsGeo={districtsGeo}/>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  districts: PropTypes.array,
  districtsGeo: PropTypes.array,
  districtGeoAction: PropTypes.object,
  districtActions: PropTypes.object,
  favoritesAction: PropTypes.object
}

export default Home;
