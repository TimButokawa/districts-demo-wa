import axios from 'axios';

export const REQUEST_DISTRICTS_DEMO = 'REQUEST_DISTRICTS_DEMO';
export const REQUEST_DISTRICTS_DEMO_SUCCESS = 'REQUEST_DISTRICTS_DEMO_SUCCESS';
export const REQUEST_DISTRICTS_DEMO_FAILURE = 'REQUEST_DISTRICTS_DEMO_FAILURE';
export const SHOW_MORE_DISTRICTS = 'SHOW_MORE_DISTRICTS';

export const requestDistricts = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_DISTRICTS_DEMO
    })
    return axios({
      method: 'get',
      url: 'https://data.wa.gov/resource/x2b6-bwh6.json',
      headers: {
        'Accept': 'application/json',
        'X-App-token': 'F835Hdr4HhiQpkbeoslWHrJ29'
      }
    }).then(districts => {
      dispatch({
        type: REQUEST_DISTRICTS_DEMO_SUCCESS,
        payload: districts
      })
    }).catch(() => {
      dispatch({
        type: REQUEST_DISTRICTS_DEMO_FAILURE
      })
    });
  }
};

export const showMoreDistricts = (count = 8) => {
  return {
    type: SHOW_MORE_DISTRICTS,
    payload: count
  };
}
