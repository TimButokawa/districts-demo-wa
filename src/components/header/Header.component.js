import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Favorite from 'material-ui-icons/Favorite';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder';
import Text from 'material-ui/Text';

const styles = {
  bar: {
    backgroundColor: '#4FC3F7',
    height: '48px',
    position: 'static',
    boxShadow: 'none'
  },
  primaryText: {
    color: '#FEFEFE',
    flex: '1'
  },
  favorite: {
    color: '#F44336',
    cursor: 'pointer'
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleShowFavorites = this.handleShowFavorites.bind(this);
  }

  handleShowFavorites() {
    this.props.interfaceAction.toggleDisplayFavorites();
  }

  render() {
    const {favorites, displayFavorites} = this.props;
    const favorite = displayFavorites ?
    <Favorite style={styles.favorite} onClick={() => this.handleShowFavorites()}/> :
    <FavoriteBorder style={styles.favorite} onClick={() => this.handleShowFavorites()}/>
    return (
      <AppBar style={styles.bar}>
        <Toolbar>
          <Text style={styles.primaryText} type="subheading">Washington State Legislative Districts</Text>
          {favorites.length ? favorite : null}
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  favorites: PropTypes.array,
  displayFavorites: PropTypes.bool,
  interfaceAction: PropTypes.object
};

export default Header;
