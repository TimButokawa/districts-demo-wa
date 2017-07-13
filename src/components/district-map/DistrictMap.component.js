import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';
import {mapConfig} from '../../utils/map.utils';
import UpdateGeoJSON from '../utils/update-geo.component';

class DistrictMap extends Component {
  constructor(props) {
    super(props);
    this.handleGetDistrictInfo = this.handleGetDistrictInfo.bind(this);
  }

  handleGetDistrictInfo(district) {
    this.props.districtGeoAction.getDistrictGeo(district);
    this.props.demographicsAction.getDistrictDemo(district);
  }

  onEachFeature(feature, layer) {
    layer.on({
      click: (e) => {
        this.handleGetDistrictInfo(feature.district);
        const map = this.leafletMap.leafletElement;
        map.panTo([e.latlng.lat, e.latlng.lng]);
      }
    });
  }

  render() {
    const {districts, selectedDistrict, favorites, displayFavorites} = this.props;
    return (
      <div style={{height: '100%'}}>
        <Map
          ref={m => {this.leafletMap = m}}
          center={mapConfig.default.center}
          zoom={mapConfig.default.zoom}
          minZoom={mapConfig.default.minZoom}
          maxZoom={mapConfig.default.maxZoom}
          scrollWheelZoom={mapConfig.default.scrollWheelZoom}
          style={mapConfig.default.styles.map}>
          <TileLayer
            url={mapConfig.tileUrl}
            accessToken={mapConfig.accessToken}/>
          <UpdateGeoJSON
              data={selectedDistrict}
              style={mapConfig.default.styles.selected}/>
          {displayFavorites ? <UpdateGeoJSON
            data={favorites}
            style={mapConfig.default.styles.favorites}
            onEachFeature={this.onEachFeature.bind(this)}/> :  null}
          <GeoJSON
              data={districts}
              style={mapConfig.default.styles.default}
              onEachFeature={this.onEachFeature.bind(this)}/>
        </Map>
        <div id="mapId"></div>
      </div>
    );
  }
}

DistrictMap.propTypes = {
  districts: PropTypes.array,
  districtGeoAction: PropTypes.object,
  demographicsAction: PropTypes.object,
  selectedDistrict: PropTypes.array,
  favorites: PropTypes.array,
  displayFavorites: PropTypes.bool
};

export default DistrictMap;
