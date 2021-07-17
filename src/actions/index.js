import * as types from './types';

export const fetchRestaurantsAction = restaurants => ({
  type: types.GET_RESTAURANTS,
  payload: restaurants,
});

export const postOpinionsAction = opinion => ({
  type: types.ADD_OPINION,
  opinion,

});

export const showRestaurantAction = restaurant => ({
  type: types.SHOW_RESTAURANT,
  payload: restaurant,

});
