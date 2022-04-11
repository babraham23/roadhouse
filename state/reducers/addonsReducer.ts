export const ADD_COST = 'ADD_COST';
export const MINUS_COST = 'MINUS_COST';
export const ADD_ADD_ON = 'ADD_ADD_ON';
export const CLEAR_ADD_ON = 'CLEAR_ADD_ON';

const initialState: any = {
    ProductOptions: [],
    floatingCost: 0,
};

const addOnReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_COST:
            return Object.assign({}, state, { floatingCost: state.floatingCost + action.payload });
        case MINUS_COST:
            return Object.assign({}, state, { floatingCost: state.floatingCost - action.payload });
        case ADD_ADD_ON:
            return Object.assign({}, state, { ProductOptions: action.payload });
        case CLEAR_ADD_ON:
            return Object.assign({}, state, { floatingCost: state.floatingCost - action.payload });
    }
    return state;
};

export default addOnReducer;
