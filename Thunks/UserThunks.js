import { addCurrentUser, hasErrored } from '../Actions/index'

export const addNewUserThunk = (user) => {
  const url = 'https://lets-hang-be.herokuapp.com/api/v1/users'
  return async dispatch => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }
      const response = await fetch(url, options)
      const currentUser = await response.json()
      dispatch(addCurrentUser(currentUser))
      return currentUser
    }
    catch(error){
      dispatch(hasErrored(error))
    }
  }
}

export const loginUserThunk = currentUser => {
  const url = 'http://localhost:3000/api/v1/sessions'
  return async dispatch => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(currentUser)
      }
      const response = await fetch(url, options)
      const user = await response.json()
      dispatch(addCurrentUser(user))
      return user
    }
    catch (error) {
      dispatch(hasErrored(error))
    }
  }
}

export const editUserThunk = (id, key, profile) => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/users/${id}?api_key=${key}`
  return async dispatch => {
    try { 
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(profile)
      }
      const response = await fetch(url, options)
      const user = await response.json()
      dispatch(addCurrentUser(user))
      return user
    }
    catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}