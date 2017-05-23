import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from 'material-ui/Layout';
import {Link} from 'react-router-dom';
import L from 'leaflet';
import {mapConfig} from '../../utils/map.utils';

const styles = {
  map: {
    height: '600px'
  },
  borders: {
    color: '#4d4d4d',
    weight: 1
  }
};

class Home extends Component {
  componentWillMount() {
    const {districtsGeo} = this.props;
    if (!districtsGeo.length) {
      this.props.districtAction.requestDistrictsGeo();
    }
  }

  componentDidMount() {
    const districtMap = L.map(mapConfig.id, mapConfig.default);
    this.setState({map: districtMap});

    L.tileLayer(mapConfig.tileUrl, {accessToken: mapConfig.accessToken}).addTo(districtMap);
  }

  render() {
    const {districtsGeo} = this.props;
    if (districtsGeo.length && this.state) {
      L.geoJSON(districtsGeo, styles.borders).addTo(this.state.map);
    }

    return (
      <Layout container gutter={16}>
        <Layout item xs={12}>
          <div style={styles.map} id="mapId"></div>
          <Link to="/districts">Districts Cards</Link>
        </Layout>
      </Layout>
    );
  }
}

Home.propTypes = {
  districtAction: PropTypes.object,
  districtsGeo: PropTypes.array
};

export default Home;
