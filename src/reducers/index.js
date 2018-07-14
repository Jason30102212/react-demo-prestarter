import { combineReducers } from 'redux';
import ReducerMenuItems from './reducer_menu_items';

const rootReducer = combineReducers({
  menu: ReducerMenuItems
});

export default rootReducer;
