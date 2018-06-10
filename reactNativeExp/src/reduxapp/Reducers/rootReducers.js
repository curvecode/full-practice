import { combineReducers } from 'redux';
import counterReducer from '../Reducers/counterReducer';

const rootReducers = combineReducers({
    // List reducers
    counterReducer
});

export default rootReducers;
