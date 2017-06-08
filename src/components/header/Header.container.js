import {connect} from 'react-redux';
import Header from './Header.component'

const mapStateToProps = state => {
  return {
    favorites: state.favorites.data
  }
}

export default connect(mapStateToProps)(Header);
