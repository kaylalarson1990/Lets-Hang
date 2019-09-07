export const EventReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return action.events.data
    default:
      return state
  }
}