export const PendingReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PENDING_FRIENDS':
      return action.friends.data.attributes
    default:
      return state
  }
}