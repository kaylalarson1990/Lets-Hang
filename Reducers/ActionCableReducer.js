export const ActionCableReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_ACTION_CABLE':
      return action.actionCable
    default:
      return state
  }
}