import { createStore, combineReducers } from "redux";

// Reducer imports
import todoReducer from "./reducers/TodoReducers";

const reducers = combineReducers({todo: todoReducer})

const store = createStore(reducers)

export default store;