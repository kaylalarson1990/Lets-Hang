import { combineReducers } from 'redux'
import { EventReducer } from './EventReducer'
import CurrentUserReducer from './CurrentUserReducer'

export const rootReducer = combineReducers({
  events: EventReducer,
  currentUser: CurrentUserReducer
})