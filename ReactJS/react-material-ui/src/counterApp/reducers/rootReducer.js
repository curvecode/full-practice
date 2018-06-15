/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import counterReducer from '../reducers/counterReducer';
import totalReducer from '../reducers/totalReducer';

const rootReducers = combineReducers({
    // List reducers
    counterReducer,
    totalReducer
});

export default rootReducers;