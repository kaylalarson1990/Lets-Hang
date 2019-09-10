import { getFriends, hasErrored, getPendingFriends, getRequestedFriends } from '../Actions/index'

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
      const requestStatus = response.json()
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
      return removeStatus
    }
    catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export const getPendingFriendsThunk = key => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/user/pending_friends?api_key=${key}`
  return async dispatch => {
    try {
      const response = await fetch(url)
      const friends = await response.json()
      dispatch(getPendingFriends(friends))
      return friends
    }
    catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export const getRequestedFriendsThunk = key => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/user/requested_friends?api_key=${key}`
  return async dispatch => {
    try {
      const response = await fetch(url)
      const friends = await response.json()
      dispatch(getRequestedFriends(friends))
      return friends
    }
    catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}