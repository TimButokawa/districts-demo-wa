import React, {Component} from 'react';
import {CircularProgress} from 'material-ui/Progress';

const styles = {
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '100%',
    zIndex: 10000,
    backgroundColor: 'rgba(255, 255, 255, .8)'
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Loader extends Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.loader}>
          <CircularProgress/>
        </div>
      </div>
    );
  }
}

export default Loader;
