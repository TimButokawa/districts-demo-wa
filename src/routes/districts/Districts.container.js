import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDistricts, getVisibleIndexes} from '../../selectors/districts';
import Districts from './Districts';
import * as DistrictActions from '../../actions/districts';
import * as FavoritesActions from '../../actions/favorites';

const mapStateToProps = state => {
  return {
    districts: getDistricts(state),
    favorites: state.favorites,
    visibleIndexes: getVisibleIndexes(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    districtAction: bindActionCreators(DistrictActions, dispatch),
    favoritesAction: bindActionCreators(FavoritesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Districts);
