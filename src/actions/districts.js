import axios from 'axios';

export const REQUEST_DISTRICTS = 'REQUEST_DISTRICTS';
export const REQUEST_DISTRICTS_SUCCESS = 'REQUEST_DISTRICTS_SUCCESS';
export const REQUEST_DISTRICTS_FAILURE = 'REQUEST_DISTRICTS_FAILURE';

export const requestDistricts = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_DISTRICTS
    })
    return axios({
      method: 'get',
      url: 'https://data.wa.gov/resource/qdkt-urie.json',
      headers: {
        'Accept': 'application/json',
        'X-App-token': 'F835Hdr4HhiQpkbeoslWHrJ29'
      }
    }).then(districts => {
      dispatch({
        type: REQUEST_DISTRICTS_SUCCESS,
        payload: districts
      })
    }).catch(() => {
      dispatch({
        type: REQUEST_DISTRICTS_FAILURE
      })
    });
  }
};
