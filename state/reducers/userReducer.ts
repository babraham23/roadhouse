export const SET_USER = 'SET_USER';

const initialState: any = {}

const userReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SET_USER:
            return Object.assign({}, state, action.payload );
    }
    return state
}

export default userReducer