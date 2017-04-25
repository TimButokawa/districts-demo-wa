import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Districts from './Districts';
import * as DistrictActions from '../../actions/districts';
import * as FavoritesActions from '../../actions/favorites';

const mapStateToProps = state => {
  return {
    districts: state.districts,
    favorites: state.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    districtAction: bindActionCreators(DistrictActions, dispatch),
    favoritesAction: bindActionCreators(FavoritesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Districts);
