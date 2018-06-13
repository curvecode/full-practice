/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import counterReducer from '../reducers/counterReducer';

const rootReducers = combineReducers({
    // List reducers
    counterReducer
});

export default rootReducers;