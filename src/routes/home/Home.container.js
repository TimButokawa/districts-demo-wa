import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDistrictsGeo, getDistrictGeo} from '../../selectors/districts-geo';
import {getDistricts} from '../../selectors/districts';
import * as DistrictGeoActions from '../../actions/districts-geo';
import * as DistrictActions from '../../actions/districts';
import * as FavoritesActions from '../../actions/favorites';

import Home from './Home';

const mapStateToProps = state => {
  return {
    districtsGeo: getDistrictsGeo(state),
    districts: getDistricts(state),
    selectedDistrict: getDistrictGeo(state),
    favorites: state.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    districtGeoAction: bindActionCreators(DistrictGeoActions, dispatch),
    districtAction: bindActionCreators(DistrictActions, dispatch),
    favoritesAction: bindActionCreators(FavoritesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
