export const EventReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return action.events.data
    case 'ADD_EVENT':
      return [...state, action.event]
    default:
      return state
  }
}