export const SET_MENU_ITEM = 'SET_MENU_ITEM';

const menuItemReducer = (state = {}, action: any) => {
    switch (action.type) {
        case SET_MENU_ITEM:
            return Object.assign({}, state, action.payload);
    }
    return state;
};

export default menuItemReducer;
