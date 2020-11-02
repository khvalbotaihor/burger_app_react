import * as ActionTypes from './actions';

const initialState = {
    ingredients: null,
    totalPrice: 4,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_INGREDIENT:
            return {

            }
        case ActionTypes.REMOVE_INGREDIENT:
            return {

            }
        default:
            return state;
    }
}

export default reducer;