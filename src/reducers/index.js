import { combineReducers } from 'redux';
import restaurantReducer from './restaurant';

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
});

export default rootReducer;