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
    scrollWheelZoom: false,
    styles: {
      map: {
        height: '94%'
      },
      default: {
        color: '#4D4D4D',
        weight: 1,
        fillOpacity: 0.1
      },
      selected: {
        color: '#4FC3F7',
        weight: 2,
        fill: false
      },
      favorites: {
        color: '#E60000',
        weight: 1,
        stroke: false,
        fillOpacity: 0.6
      }
    }
  }
};


export const formatDistrictGeo = districts => {
  const geoData = [];

  forEach(districts.data, district => {
    district = mapKeys(district, (v, k) => {
      return k === 'the_geom' ? k = 'geometry' : k;
    });

    const latlng = district.geometry.coordinates[0][0][0];
    const properties = {
      name: district.name,
      district: district.district,
      roughCenter: [latlng[1], latlng[0]]
    };
    assign(district, {properties}, {type: 'Feature'});
    geoData.push(district);
  });

  districts.data = geoData.sort((a, b) => a.district - b.district);
  return districts;
};
