export const SET_MENU = 'SET_MENU';

const initialState: any = {
    menu: ''
}

const menuReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SET_MENU:
            return Object.assign({}, state, { menu: action.payload } );
    }
    return state
}

export default menuReducer