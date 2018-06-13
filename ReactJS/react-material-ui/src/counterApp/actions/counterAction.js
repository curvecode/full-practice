/*jshint esversion: 6 */
import * as ActionType from './actionTypes';

export const addNumber = (num) => ({
    type: ActionType.ADD_NUMBER,
    num: num
});

export const minusNumber = (num) => ({
    type: ActionType.MINUS_NUMBER,
    num: num
});

export const updateNumberChanged = (num) => ({
    type: ActionType.UPDATE_NUM_CHANGE,
    num: num
});
