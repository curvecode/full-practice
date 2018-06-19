import * as ActionType from '../Constants/ActionType';

export const login = (email, pwd) => {
    return ({
        type: ActionType.LOGIN,
        email: email,
        pwd: pwd
    });
}