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

export const createEventThunk = (event, key) => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/events?api_key=${key}`;
  return async dispatch => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(event)
      };
      const response = await fetch(url, options);
      const newEvent = await response.json();
      dispatch(addEvent(newEvent));
      return newEvent;
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};

export const inviteFriendsToEventThunk = (id, key,friends) => {
  console.log(id, key)
  const url = `https://lets-hang-be.herokuapp.com/api/v1/user/event/${id}?api_key=${key}`
  return async dispatch => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(friends) 
      }
      const response = await fetch(url, options)
      const event = await response.json()
      console.log(event)
      await getEventsThunk(key)
      return event
    }
    catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export const acceptEventThunk = (id, key) => {
  console.log(id, key)
  const url = `https://lets-hang-be.herokuapp.com/api/v1/user/event/${id}?api_key=${key}`
  return async dispatch => {
    try{
      const options = {
        method: 'PATCH',
      }
      const response = await fetch(url, options)
      const event = await response.json()
      return event
    }
    catch(error) {
      dispatch(hasErrored(error.messge))
    }
  }
}

export const declineEventThunk = (id, key) => {
  const url = `https://lets-hang-be.herokuapp.com/api/v1/user/event/${id}?api_key=${key}`
  return async dispatch => {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
      const response = await fetch(url, options)
      const event = await response.json()
      console.log(event)
      return event
    }
    catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}
