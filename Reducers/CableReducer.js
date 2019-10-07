export const CableReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_CABLE':
      return action.cable
    default:
      return state
  }
}