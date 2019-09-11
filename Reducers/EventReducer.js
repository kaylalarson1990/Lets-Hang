export const EventReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return action.events.data.attributes.events
    case 'ADD_EVENT':
      return [...state, action.event.data.attributes]
    default:
      return state
  }
}