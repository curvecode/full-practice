import { combineReducers } from 'redux';
import counterReducer from '../Reducers/counterReducer';
import totalReducer from '../Reducers/totalReducer';
import productReducer from '../Reducers/productReducer';

const rootReducers = combineReducers({
    // List reducers
    counterReducer,
    totalReducer,
    productReducer
});

export default rootReducers;
