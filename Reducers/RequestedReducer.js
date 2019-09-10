export const RequestedReducer = (state= [], action) => {
  switch (action.type) {
    case 'GET_REQUESTED_FRIENDS':
      return action.friends.data.attributes
    default:
      return state
  }
}