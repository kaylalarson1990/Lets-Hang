import { combineReducers } from "redux";
import { EventReducer } from "./EventReducer";
import { FriendsReducer } from "./FriendsReducer";
import { CurrentUserReducer } from "./CurrentUserReducer";

export const rootReducer = combineReducers({
  events: EventReducer,
  friends: FriendsReducer,
  currentUser: CurrentUserReducer
});
