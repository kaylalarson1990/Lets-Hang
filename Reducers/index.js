import { combineReducers } from "redux";
import { EventReducer } from "./EventReducer";
import { FriendsReducer } from "./FriendsReducer";
import { CurrentUserReducer } from "./CurrentUserReducer";
import { ErrorReducer } from './ErrorReducer'

export const rootReducer = combineReducers({
  events: EventReducer,
  friends: FriendsReducer,
  currentUser: CurrentUserReducer,
  error: ErrorReducer
});
