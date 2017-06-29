import axios from 'axios';
import {formatDistrictGeo} from '../utils/map.utils';

export const REQUEST_DISTRICTS_GEO = 'REQUEST_DISTRICTS_GEO';
export const REQUEST_DISTRICTS_GEO_SUCCESS = 'REQUEST_DISTRICTS_GEO_SUCCESS';
export const REQUEST_DISTRICTS_GEO_FAILURE = 'REQUEST_DISTRICTS_GEO_FAILURE';
export const GET_DISTRICT_GEO = 'GET_DISTRICT_GEO';
export const GET_FAVORITE_DISTRICTS_GEO = 'GET_FAVORITE_DISTRICTS_GEO';

export const requestDistrictsGeo = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_DISTRICTS_GEO
    })
    return axios({
      method: 'get',
      url: 'https://data.wa.gov/resource/wy8r-uqn9.json',
      headers: {
        'Accept': 'application/json',
        'X-App-token': 'F835Hdr4HhiQpkbeoslWHrJ29'
      }
    }).then(districts => {
      dispatch({
        type: REQUEST_DISTRICTS_GEO_SUCCESS,
        payload: formatDistrictGeo(districts)
      })
    }).catch(() => {
      dispatch({
        type: REQUEST_DISTRICTS_GEO_FAILURE
      })
    });
  }
};

export function getDistrictGeo(district) {
  return {
    type: GET_DISTRICT_GEO,
    district
  };
};

export function getFavoriteDistrictsGeo() {
  return {
    type: GET_FAVORITE_DISTRICTS_GEO
  }
}
