export const CurrentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_USER':
      return action.user
    default:
      return state
  }
}