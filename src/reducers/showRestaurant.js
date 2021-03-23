import { SHOW_RESTAURANT } from '../actions/types';

const initialState = {
  restaurant: {
    id: 1,
    name: 'RNAME',
    description: 'Descriptionres'
  },
  opinions: [{
    id: 1,
    name: 'Jess',
    body: 'commentario',
    created_at: 'Hoy'
  }],
  images: [{
    image: 'http://localhost:3002/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2f992e7e175aff0ecee437941c438352e3afffca/smoothie.jpg'
  }],
};
const showRestaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_RESTAURANT:
      console.log('LO QUE YEGA PAYLOAD', action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default showRestaurantReducer;