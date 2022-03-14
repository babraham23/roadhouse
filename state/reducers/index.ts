import { combineReducers } from 'redux';
import userReducer from './userReducer';
import menuReducer from './menuReducer';
import basketReducer from './basketReducer';
import addOnReducer from './addonsReducer';
import menuItemReducer from './setMenuItem';

const appReducers = combineReducers({
    userReducer,
    menuReducer,
    basketReducer,
    addOnReducer,
    menuItemReducer
});

export default appReducers;