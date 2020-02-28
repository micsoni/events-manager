import { combineReducers } from "redux";
import { eventsReducer } from "./reducers/events";
import { eventReducer } from "./reducers/event";

export default combineReducers({
  events: eventsReducer,
  event: eventReducer
});
