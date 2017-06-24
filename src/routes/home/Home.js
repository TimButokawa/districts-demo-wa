import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Map from '../../components/district-map/DistrictMap.component';

const styles = {
  container: {
    height: '100%',
    display: 'flex',
  },
  aside: {
    padding: '16px'
  },
  mainContent: {
    flexGrow: '1',
    padding: '16px'
  }
};

class Home extends Component {

  componentWillMount() {
    const {districtsGeo} = this.props;
    if (!districtsGeo.length) {
      this.props.districtAction.requestDistrictsGeo();
    }
  }

  render() {
    const {districtsGeo} = this.props;
    return (
      <div style={styles.container}>
        <Paper elevation={1} style={styles.aside}>
          districts
        </Paper>
        <div style={styles.mainContent}>
          <Map districtsGeo={districtsGeo}/>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  districts: PropTypes.array,
  districtsGeo: PropTypes.array
}

export default Home;
