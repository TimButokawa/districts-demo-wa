import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';
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

  render() {
    const {districtsGeo} = this.props;

    return (
      <div>
        <Map
          center={mapConfig.default.center}
          zoom={mapConfig.default.zoom}
          minZoom={mapConfig.default.minZoom}
          maxZoom={mapConfig.default.maxZoom}
          scrollWheelZoom={mapConfig.default.scrollWheelZoom}
          style={styles.map}>
          <TileLayer
            url={mapConfig.tileUrl}
            accessToken={mapConfig.accessToken}/>
          <GeoJSON
              data={districtsGeo}
              style={styles.borders}
              onEachFeature={_onEachFeature}/>
        </Map>
        <div id="mapId"></div>
      </div>
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
  layer.bindPopup(template);
}

DistrictMap.propTypes = {
  districtsGeo: PropTypes.array
};

export default DistrictMap;
