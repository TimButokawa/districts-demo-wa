import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDistrictsGeo, getDistrictGeo} from '../../selectors/districts-geo';
import {getDistrictsDemo, getDistrictDemo} from '../../selectors/districts';
import {getDisplayFavorites, getChartType} from '../../selectors/interface';
import * as DistrictGeoActions from '../../actions/districts-geo';
import * as DemographicsActions from '../../actions/districts';
import * as FavoritesActions from '../../actions/favorites';
import * as InterfaceActions from '../../actions/interface';

import Home from './Home';

const mapStateToProps = state => {
  return {
    districts: getDistrictsGeo(state),
    demographics: getDistrictsDemo(state),
    selectedDistrict: getDistrictGeo(state),
    selectedDemographics: getDistrictDemo(state),
    displayFavorites: getDisplayFavorites(state),
    favorites: state.favorites.data,
    chartType: getChartType(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    districtGeoAction: bindActionCreators(DistrictGeoActions, dispatch),
    demographicsAction: bindActionCreators(DemographicsActions, dispatch),
    favoritesAction: bindActionCreators(FavoritesActions, dispatch),
    interfaceAction: bindActionCreators(InterfaceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
