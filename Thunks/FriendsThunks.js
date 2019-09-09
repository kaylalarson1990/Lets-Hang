import { getFriends, hasErrored } from '../Actions/index'

export const getUserFriendsThunk = key => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/user/friends?api_key=${key}`
  return async dispatch => {
    try{ 
      const response = await fetch(url)
      const friends = await response.json()
      dispatch(getFriends(friends))
      return friends
    }
    catch(error) {
      dispatch(hasErrored(error))
    }
  }
}

