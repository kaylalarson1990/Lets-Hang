import { combineReducers } from "redux";
import { EventReducer } from "./EventReducer";
import { FriendsReducer } from "./FriendsReducer";

export const rootReducer = combineReducers({
  events: EventReducer,
  friends: FriendsReducer
});
