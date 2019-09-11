export const RequestedReducer = (state= [], action) => {
  switch (action.type) {
    case 'GET_REQUESTED_FRIENDS':
      console.log(action.friends)
      return action.friends
    default:
      return state
  }
}