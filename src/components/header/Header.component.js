import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';

const styles = {
  bar: {
    backgroundColor: '#4FC3F7',
    height: '48px'
  },
  primaryText: {
    color: '#FEFEFE'
  }
};

class Header extends Component {
  render() {
    return (
      <AppBar style={styles.bar}>
        <Toolbar>
          <Text style={styles.primaryText} type="subheading">Washington State Legislative Districts</Text>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
