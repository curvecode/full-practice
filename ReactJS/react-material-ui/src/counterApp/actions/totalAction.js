import * as ActionTypes from '../actions/actionTypes';

export const addCounter = (num) => {
    return ({
        type: ActionTypes.ADD_COUNTER,
        num: num
    });
};
