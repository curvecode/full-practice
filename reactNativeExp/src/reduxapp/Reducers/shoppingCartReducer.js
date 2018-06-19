import * as ActionTypes from '../Constants/ActionType';

const defaultState = {
	products: [],
	addedProducts: [],
	total: 0,
	shoppingCartVisible: false
};

const shoppingCartReducer = (state = defaultState, action) => {
    switch(action.type) {
        case(ActionTypes.GET_LIST_PRODUCT):
            return {
                ...state,
                products: action.products
            }
            
    }
}

export default shoppingCartReducer;
