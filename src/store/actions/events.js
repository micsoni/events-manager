import request from "superagent";

const baseUrl = "http://localhost:4002";

export const eventsFetched = events => ({
  type: "EVENTS_FETCHED",
  payload: events
});

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events.all.length) return;
  // a GET /events request
  request(`${baseUrl}/events`)
    .then(response => {
      console.log(response.body);
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};

export const eventCreateSuccess = event => ({
  type: "EVENT_CREATE_SUCCESS",
  payload: event
});
export const createEvent = data => (dispatch, getState) => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const uniqueEventFetched = event => ({
  type: "EVENT_FETCHED",
  payload: event
});

export const loadEvent = id => (dispatch, getState) => {
  request
    .get(`${baseUrl}/events/${id}`)
    .then(response => {
      console.log(response.body);
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(uniqueEventFetched(response.body));
    })
    .catch(console.error);
};

export const uniqueEventDelete = id => ({
  type: "EVENT_DELETE_SUCCESS",
  payload: id
});

export const deleteEvent = id => (dispatch, getState) => {
  request
    .delete(`${baseUrl}/events/${id}`)
    .then(response => {
      console.log("SHOULD BE ID", id);
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(uniqueEventDelete(id));
    })
    .catch(console.error);
};

export const eventUpdated = (updatedEvent) => ({
  type: "EVENT_UPDATE_SUCCESS",
  payload: updatedEvent,
});

export const updateEvent = (id, newData) => (dispatch, getState) => {
  request
    .put(`${baseUrl}/events/${id}`).send(newData)
    .then(response => {
      dispatch(eventUpdated(response.body))
    })
    .catch(console.error);
};
