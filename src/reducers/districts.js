import {REQUEST_DISTRICTS} from '../actions';

const initialState = {
  data: [{
      id: 1,
      name: 'District 1',
      isAFavorite: false
  },{
      id: 2,
      name: 'District 2'
  },
  {
      id: 3,
      name: 'District 3'
  }]
};

export default function districtsReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_DISTRICTS:
      return {
        ...state,
        data: [{
            id: 2,
            name: 'District 2'
        },
        {
            id: 3,
            name: 'District 3'
        }] // TODO: action payload
      };
    default:
      return state;
  }
}
