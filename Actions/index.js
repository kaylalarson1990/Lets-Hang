export const getEvents = events => ({
  type: 'GET_EVENTS',
  events
})

export const addCurrentUser = user => ({
  type: 'ADD_CURRENT_USER',
  user
})