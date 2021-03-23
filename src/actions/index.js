import * as types from './types';

export const fetchRestaurantsAction = restaurants => ({
  type: types.GET_RESTAURANTS,
  payload: restaurants,
});

export const updateOpinionsAction = (opinion, restaurant) => ({
  type: types.ADD_OPINION,
  name: opinion.body,
  url: restaurant.id,
});

export default fetchRestaurantsAction;