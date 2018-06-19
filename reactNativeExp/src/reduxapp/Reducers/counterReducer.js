import * as ActionType from '../Constants/ActionType';

const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case ActionType.INCREASE_NUM:
            return Object.assign({}, state, {
                count: state.count + action.num
            });
        case ActionType.DECREASE_NUM:
            return Object.assign({}, state, {
                count: state.count - action.num
            });
        // case ActionType.ADD_COUNTER:
        //     return Object.assign({}, state, {
        //         count: state.count + action.num
        //     })
        default:
            return state;
    }
}

export default counterReducer;
