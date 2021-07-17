import { GET_RESTAURANTS } from '../actions/types';

const initialState = [];
const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default restaurantsReducer;
