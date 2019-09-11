import { getFriends, hasErrored, getPendingFriends, getRequestedFriends, addSearchResult } from '../Actions/index'

export const getUserFriendsThunk = key => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/user/friends?api_key=${key}`
  return async dispatch => {
    try{ 
      const response = await fetch(url)
      const friends = await response.json()
      dispatch(getFriends(friends))
      dispatch(getPendingFriends(friends.data.attributes.pending_friends))
      dispatch(getRequestedFriends(friends.data.attributes.requested_friends))
      return friends
    }
    catch(error) {
      dispatch(hasErrored(error))
    }
  }
}

export const makeFriendRequestThunk  = (key, id) => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/friendships?api_key=${key}&friend_id=${id}`
  return async dispatch => {
    try{
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
      const response = await fetch(url, options)
      const requestStatus = await response.json()
      console.log(requestStatus)
      return requestStatus
    }
    catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export const acceptFriendRequestThunk = (id, key) => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/friendships/${id}?api_key=${key}`
  return async dispatch => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
    try {
      const response = await fetch(url, options)
      const requestStatus = await response.json()
      console.log(requestStatus)
      await getUserFriendsThunk(key)
      return requestStatus
    }
    catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export const removeFriendThunk = (id, key) => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/friendships/${id}?api_key=${key}`
  return async dispatch => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
    try{
      const response = await fetch(url, options)
      const removeStatus = await response.json()
      await getUserFriendsThunk(key)
      return removeStatus
    }
    catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export const searchForFriendThunk = (key, name) => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/user/search?api_key=${key}&query=${name}`
  return async dispatch => {
    try {
      const response = await fetch(url)
      const friend = await response.json()
      dispatch(addSearchResult(friend.data))
      return friend.data
    }
    catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}



