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

export const getPendingFriends = friends => ({
  type: 'GET_PENDING_FRIENDS',
  friends
})

export const getRequestedFriends = friends => ({
  type: 'GET_REQUESTED_FRIENDS',
  friends
})

export const addSearchResult = search => ({
  type: 'ADD_SEARCH',
  search
})

export const addActionCable = actionCable => ({
  type: 'ADD_ACTION_CABLE',
  actionCable
})

export const addCable = cable => ({
  type: 'ADD_CABLE',
  cable
})