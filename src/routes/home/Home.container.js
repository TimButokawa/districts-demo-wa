import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDistrictsGeo} from '../../selectors/districts-geo';
import Home from './Home';
import * as DistrictGeoActions from '../../actions/districts-geo';

const mapStateToProps = state => {
  return {
    districtsGeo: getDistrictsGeo(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    districtAction: bindActionCreators(DistrictGeoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
