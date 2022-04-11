export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

const initialState: any = {
    Basket: [],
};

const basketReducer = (state = initialState, action: any) => {
    switch (action.type) {
        // case ADD_TO_BASKET:
        // return Object.assign({}, state, { Basket: action.payload })
        case ADD_TO_BASKET:
            return {
                ...state,
                Basket: [...state.Basket, action.payload],
            };
        case REMOVE_FROM_BASKET:
            return {
                ...state,
                Basket: [...state.Basket.filter((cartItem: any) => cartItem.Id !== action.payload)],
            };
    }
    return state;
};

export default basketReducer;
