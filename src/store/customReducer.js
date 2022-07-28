const initialState = {
  clients: [],
};

const ADD_DATA_CLIENTS = "ADD_DATA_CLIENTS";

export const customReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CLIENTS":
      return { ...state, clients: [...state.clients, action.payload] };
    case "REMOVE_CLIENTS":
      return {
        ...state,
        clients: state.clients.filter((client) => client.id !== action.payload),
      };
    default:
      return state;
  }
};
