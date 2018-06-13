/*jshint esversion: 6 */
import * as ActionTypes from '../actions/actionTypes';

const counterReducer = (state = { count: 0, inputNumber: 2 }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NUMBER:
            return Object.assign({}, state, {
                count: state.count + action.num
            });
        case ActionTypes.MINUS_NUMBER:
            return Object.assign({}, state, {
                count: state.count - action.num
            });
        case ActionTypes.UPDATE_NUM_CHANGE:
            return Object.assign({}, state, {
                inputNumber: action.num
            });
        default:
            return state;
    }

};

export default counterReducer;