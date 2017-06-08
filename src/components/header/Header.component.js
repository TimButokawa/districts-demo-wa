import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Favorite from 'material-ui-icons/Favorite';
import Text from 'material-ui/Text';

const styles = {
  bar: {
    backgroundColor: '#4FC3F7',
    height: '48px'
  },
  primaryText: {
    color: '#FEFEFE',
    flex: '1'
  },
  favorite: {
    color: '#F44336'
  }
};

class Header extends Component {
  render() {
    const {favorites} = this.props;
    return (
      <AppBar style={styles.bar}>
        <Toolbar>
          <Text style={styles.primaryText} type="subheading">Washington State Legislative Districts</Text>
          {favorites.length ? <Favorite style={styles.favorite}/> : null}
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  favorites: PropTypes.array
};

export default Header;
