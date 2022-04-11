export const SET_RESTAURANT = 'SET_RESTAURANT';

const initialState: any = {};

const restaurantReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_RESTAURANT:
            return Object.assign({}, state, action.payload);
    }
    return state;
};

export default restaurantReducer;
