import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DistrictMap from '../../components/district-map/DistrictMap.component';
import DistrictList from '../../components/district-list/DistrictList.component';
import Loader from '../../components/loader/Loader.component';
import Paper from 'material-ui/Paper';

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

  componentWillMount() {
    const {districts} = this.props;
    if (!districts.length) {
      this.props.districtGeoAction.requestDistrictsGeo();
    }
  }

  render() {
    const {
      districts,
      selectedDistrict,
      favorites,
      displayFavorites,
      favoritesAction,
      districtGeoAction
    } = this.props;

    return (
      <div style={styles.container}>
        <Paper
          square
          style={styles.aside}>
          <DistrictList
            districts={districts}
            favoritesAction={favoritesAction}
            districtGeoAction={districtGeoAction}/>
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
