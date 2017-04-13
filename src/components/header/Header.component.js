import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';

class Header extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Text type="title">Districts</Text>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
