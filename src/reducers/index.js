import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants';
import showRestaurantReducer from './showRestaurant';

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  restaurant: showRestaurantReducer,
});

export default rootReducer;