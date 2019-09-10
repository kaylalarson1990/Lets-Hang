export const FriendsReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_FRIENDS':
        return action.friends.data.attributes.accepted_friends
      default:
        return state
    }
  }