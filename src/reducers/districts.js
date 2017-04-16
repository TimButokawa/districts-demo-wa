import REQUEST_DISTRICTS from '../actions';

const initialDistricts = [{
    id: 1,
    name: 'District 1'
}];

export default function districts(state = [], action) {
  switch(action.type) {
    case REQUEST_DISTRICTS:
      return {
        ...state,
        data: initialDistricts
      };
    default:
      return state;
  }
}
