import {mapKeys, forEach, assign} from 'lodash';

export const mapConfig = {
  id: 'mapId',
  accessToken: 'pk.eyJ1IjoidGJ1dG9yIiwiYSI6ImNqMzBhYzgyeDAwOGczNW9rbDNhNDdhcGYifQ.q7B9wNdpPz_I6fIKmS2ZFw',
  tileUrl: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}',
  default: {
    center: [47.5, -120.7401],
    zoom: 7,
    minZoom: 7,
    maxZoom: 11,
    scrollWheelZoom: false
  }
};

export const formatDistrictGeo = districts => {
  const geoData = [];
  forEach(districts.data, district => {
    district = mapKeys(district, (v, k) => {
      if (k === 'the_geom') {
        return k = 'geometry';
      }
      return k;
    });

    const properties = {
      name: district.name,
      district: district.district
    };
    assign(district, {properties}, {type: 'Feature'});
    geoData.push(district);
  });
  districts.data = geoData;
  return districts;
}
