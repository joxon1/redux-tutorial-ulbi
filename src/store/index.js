import { legacy_createStore as createStore, combineReducers } from "redux";
import { cushReducer } from "./cushReducer";
import { customReducer } from "./customReducer";

const rootReducer = combineReducers({
  cash: cushReducer,
  clients: customReducer,
});

export const store = createStore(rootReducer);
