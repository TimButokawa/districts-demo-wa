import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';
import {mapConfig} from '../../utils/map.utils';
import UpdateGeoJSON from '../utils/update-geo.component';

const styles = {
  map: {
    height: '600px'
  },
  default: {
    color: '#4d4d4d',
    weight: 1
  },
  selected: {
    color: '#E60000',
    weight: 1
  }
};

class DistrictMap extends Component {

  onEachFeature(feature, layer) {
    const title = feature.properties.name;
    const template = [
      '<div>',
        '<h3>' + title + '</h3>',
      '</div>'
    ].join('');
    layer.bindPopup(template);
  }

  render() {
    const {districtsGeo, districtGeo} = this.props;

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
          <UpdateGeoJSON
              data={districtGeo}
              style={styles.selected}
              onEachFeature={this.onEachFeature.bind(this)}/>
          <GeoJSON
              data={districtsGeo}
              style={styles.default}
              onEachFeature={this.onEachFeature.bind(this)}/>
        </Map>
        <div id="mapId"></div>
      </div>
    );
  }
}

DistrictMap.propTypes = {
  districtsGeo: PropTypes.array,
  districtGeo: PropTypes.array
};

export default DistrictMap;
