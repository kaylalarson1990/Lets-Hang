export const getEvents = events => ({
  type: "GET_EVENTS",
  events
});

export const getFriends = friends => ({
  type: "GET_FRIENDS",
  friends
});

export const addCurrentUser = user => ({
  type: 'ADD_CURRENT_USER',
  user
})

export const hasErrored = error => ({
  type: 'HAS_ERRORED',
  error
})

export const addEvent = event => ({
  type: 'ADD_EVENT',
  event
})
