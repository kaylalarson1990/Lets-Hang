import { getEvents, hasErrored, addEvent } from "../Actions/index";

export const getEventsThunk = key => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/user/events?api_key=${key}`;
  return async dispatch => {
    try {
      const response = await fetch(url);
      const events = await response.json();
      dispatch(getEvents(events));
      return events;
    } catch (error) {
      dispatch(hasErrored(error));
    }
  };
};

export const createEventThunk = event => {
  const url = "https://lets-hang-be.herokuapp.com/api/v1/events";
  return async dispatch => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(event)
      };
      const response = await fetch(url, options);
      const newEvent = await response.json();
      dispatch(addEvent(newEvent));
      return event;
    } catch (error) {
      dispatch(hasErrored);
    }
  };
};
