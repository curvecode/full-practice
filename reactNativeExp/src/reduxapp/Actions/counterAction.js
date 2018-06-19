import * as ActionType from '../Constants/ActionType';

export const increaseNum = (num) => ({
    type: ActionType.INCREASE_NUM,
    num: num
});

export const decreaseNum = (num) => ({
    type: ActionType.DECREASE_NUM,
    num: num
})
