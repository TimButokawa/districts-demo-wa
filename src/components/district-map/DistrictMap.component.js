import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';
import {mapConfig} from '../../utils/map.utils';
import UpdateGeoJSON from '../utils/update-geo.component';

class DistrictMap extends Component {
  constructor(props) {
    super(props);
    this.handleGetDistrictGeo = this.handleGetDistrictGeo.bind(this);
  }

  handleGetDistrictGeo(district) {
    this.props.districtGeoAction.getDistrictGeo(district);
  }

  onEachFeature(feature, layer) {
    layer.on({
      click: () => {
        this.handleGetDistrictGeo(feature.district)
      }
    });
  }

  render() {
    const {districts, selectedDistrict, favorites, displayFavorites} = this.props;
    return (
      <div>
        <Map
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
            style={mapConfig.default.styles.favorites}/> :  null}
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
  selectedDistrict: PropTypes.array,
  favorites: PropTypes.array,
  displayFavorites: PropTypes.bool
};

export default DistrictMap;
