import * as ActionTypes from '../Constants/ActionType';

const totalReducer = (state = { total: 0 }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COUNTER:
            return Object.assign({}, state, {
                total: state.total + action.num
            })
        default:
            return state;
    }
}

export default totalReducer;
