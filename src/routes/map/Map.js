import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from 'material-ui/Layout';
import Button from 'material-ui/Button';
import {withRouter} from 'react-router';
import L from 'leaflet';
import {mapConfig} from '../../utils/map.utils';
import Loader from '../../components/loader/Loader.component';

const styles = {
  map: {
    height: '600px'
  },
  borders: {
    color: '#4d4d4d',
    weight: 1
  }
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation(route) {
    const {history} = this.props;
    history.push(route);
  }

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
    const loader = districtsGeo.length ? null : <Loader/>;

    if (districtsGeo.length && this.state) {
      L.geoJSON(districtsGeo, {
        onEachFeature: _onEachFeature,
        style: styles.borders,
      }).addTo(this.state.map);
    }

    return (
      <Layout container gutter={16}>
        <Layout item xs={12}>
          {loader}
          <div style={styles.map} id="mapId"></div>
        </Layout>
        <Layout container align="center" justify="center">
          <Layout item>
            <Button onClick={() => this.handleNavigation('/')}>Back</Button>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

function _onEachFeature(feature, layer) {
  const title = feature.properties.name;
  const template = [
    '<div>',
      '<h3>' + title + '</h3>',
    '</div>'
  ].join('');
  const popup = L.popup().setContent(template);
  layer.bindPopup(popup);
}

Map.propTypes = {
  districtAction: PropTypes.object,
  districtsGeo: PropTypes.array,
  history: PropTypes.object
};

export default withRouter(Map);
