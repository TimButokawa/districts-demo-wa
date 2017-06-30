import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDisplayFavorites} from '../../selectors/interface';
import Header from './Header.component'
import * as InterfaceActions from '../../actions/interface';

const mapStateToProps = state => {
  return {
    favorites: state.favorites.data,
    displayFavorites: getDisplayFavorites(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    interfaceAction: bindActionCreators(InterfaceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
