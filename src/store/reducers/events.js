const initialState = { all: [] };

export function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENTS_FETCHED": {
      return {
        ...state,
        all: action.payload.events, total: action.payload.total
      };
    }
    case "EVENT_CREATE_SUCCESS": {
      return {
        ...state,
        all: [...state.all, action.payload]
      };
    }
    case "EVENT_DELETE_SUCCESS": {
      const eventId = action.payload;
      const allMinusDeleted = state.all.filter(event => event.id !== eventId);
      return { ...state, all: allMinusDeleted };
    }
    case "EVENT_UPDATE_SUCCESS": {
      const eventId = action.payload.id;
      const updatedEvents = state.all.map(event =>
        event.id === eventId ? action.payload : event
      );

      console.log("updatedEV" , updatedEvents);
      

      return {
        all: updatedEvents
      };
    }

    default: {
      return state;
    }
  }
}
