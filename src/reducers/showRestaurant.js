import { SHOW_RESTAURANT, ADD_OPINION } from '../actions/types';

const initialState = {
  restaurant: {
    id: 1,
    name: 'RNAME',
    description: 'Descriptionres',
  },
  opinions: [{
    id: 1,
    name: 'Jess',
    body: 'commentario',
    created_at: 'Hoy',
  }],
  images: [{
    image: 'http://localhost:3002/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2f992e7e175aff0ecee437941c438352e3afffca/smoothie.jpg',
  }],
};

const addOpinion = (state, newOpinion) => {
  const newState = state;
  console.log('NEWSTATEOPs', newState.opinions);
  newState.opinions = [...state.opinions, newOpinion];
  console.log('AFERSADD', newState.opinions);
  return newState;
};
const showRestaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_RESTAURANT:
      return action.payload;
    case ADD_OPINION:
      return addOpinion(state, action.opinion);
    default:
      return state;
  }
};

export default showRestaurantReducer;
