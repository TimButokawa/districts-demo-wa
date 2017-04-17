import {REQUEST_DISTRICTS} from '../actions';

const initialState = [{
    id: 1,
    name: 'District 1',
    isAFavorite: false
}];

export default function districtsReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_DISTRICTS:
      return [{
            id: 2,
            name: 'District 2'
        },
        {
            id: 3,
            name: 'District 3'
      }]; // TODO: action payload
    default:
      return state;
  }
}
