import { getEvents, hasErrored } from '../Actions/index'

export const getEventsThunk = (key) => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/events?${key}`
  return async dispatch => {
    try {
      const response = await fetch(url)
      const events = await response.json()
      dispatch(getEvents(events))
      return events
    }
    catch (error) {
      dispatch(hasErrored(error))
    }
  }
}