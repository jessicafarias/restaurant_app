import { GET_RESTAURANTS } from '../actions/types';

const initialState = [
  {
    name: 'rest1'
  },{
    namme: 'rest2'
  },
  {
    name: 'rest3'
  },
  {
    name: 'rest4'
  },
  {
    name: 'rest4'
  },
  {
    name: 'rest4'
  },
];
const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default restaurantReducer;