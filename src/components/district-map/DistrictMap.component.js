import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

class DistrictMap extends Component {
  componentDidMount() {
    const districtMap = L.map(mapConfig.id, mapConfig.default);
    this.setState({map: districtMap});

    L.tileLayer(mapConfig.tileUrl, {accessToken: mapConfig.accessToken}).addTo(districtMap);
  }

  render() {
    const {districtsGeo} = this.props;
    if (districtsGeo.length && this.state) {
      L.geoJSON(districtsGeo, {
        onEachFeature: _onEachFeature,
        style: styles.borders,
      }).addTo(this.state.map);
    }

    return <div style={styles.map} id="mapId"></div>
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

DistrictMap.propTypes = {
  districtsGeo: PropTypes.array
};

export default DistrictMap;
