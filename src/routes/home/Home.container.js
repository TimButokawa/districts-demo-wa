import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDistrictsGeo, getDistrictGeo} from '../../selectors/districts-geo';
import {getDisplayFavorites} from '../../selectors/interface';
import * as DistrictGeoActions from '../../actions/districts-geo';
import * as FavoritesActions from '../../actions/favorites';

import Home from './Home';

const mapStateToProps = state => {
  return {
    districtsGeo: getDistrictsGeo(state),
    selectedDistrict: getDistrictGeo(state),
    displayFavorites: getDisplayFavorites(state),
    favorites: state.favorites.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    districtGeoAction: bindActionCreators(DistrictGeoActions, dispatch),
    favoritesAction: bindActionCreators(FavoritesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
