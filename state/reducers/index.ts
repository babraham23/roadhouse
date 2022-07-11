import { combineReducers } from 'redux';
import userReducer from './userReducer';
import menuReducer from './menuReducer';
import basketReducer from './basketReducer';
import addOnReducer from './addonsReducer';
import menuItemReducer from './setMenuItem';
import restaurantReducer from './restaurantReducer';
import loadingReducer from './loadingReducer';

const appReducers = combineReducers({
    userReducer,
    menuReducer,
    basketReducer,
    addOnReducer,
    menuItemReducer,
    restaurantReducer,
    loadingReducer,
});

export default appReducers;
