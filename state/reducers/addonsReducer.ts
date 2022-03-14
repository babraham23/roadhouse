export const ADD_ADD_ON = 'ADD_ADD_ON'
export const REMOVE_ADD_ON = 'REMOVE_ADD_ON'

const initialState: any = {
    Addons: []
}

const addOnReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ADD_ON:
      return Object.assign({}, state, { Addons: action.payload })
    case REMOVE_ADD_ON:
      return state.filter((addon: any) => addon.Id !== action.payload.Id)
  }
  return state
}

export default addOnReducer;