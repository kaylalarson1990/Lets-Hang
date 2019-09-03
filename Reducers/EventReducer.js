export const EventReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return action.events
    default:
      return state
  }
}