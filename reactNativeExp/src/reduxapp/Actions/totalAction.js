import * as ActionType from '../Constants/ActionType';

export const addCounter = (num) => ({
    type: ActionType.ADD_COUNTER,
    num: num
})