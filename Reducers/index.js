import { combineReducers } from "redux";
import { EventReducer } from "./EventReducer";
import { FriendsReducer } from "./FriendsReducer";
import { CurrentUserReducer } from "./CurrentUserReducer";
import { ErrorReducer } from './ErrorReducer'
import { RequestedReducer } from './RequestedReducer'
import { PendingReducer } from './PendingReducer'

export const rootReducer = combineReducers({
  events: EventReducer,
  friends: FriendsReducer,
  currentUser: CurrentUserReducer,
  error: ErrorReducer,
  requested: RequestedReducer,
  pending: PendingReducer
});
