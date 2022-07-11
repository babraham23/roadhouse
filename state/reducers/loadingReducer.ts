export const SET_LOADING = 'SET_LOADING';

const initialState: any = {
    loading: false,
};

const loadingReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LOADING:
            return Object.assign({}, state, { loading: action.payload });
    }
    return state;
};

export default loadingReducer;
