const initialState = {};

export function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENT_FETCHED": {
      return {
        ...state,
        details: action.payload
      };
    }
    case "EVENT_UPDATE_SUCCESS": {
      return {
        ...state,
        details: action.payload
      }
    }

    default: {
      return state;
    }
  }
}
