
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import registerReducer from "./reducer/registerreducer";

// Action Types
const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";

// Action Creators
export const setLoginStatus = (isLoggedIn) => ({
  type: SET_LOGIN_STATUS,
  payload: isLoggedIn,
});

// Combine multiple reducers
const rootReducer = combineReducers({
  registerReducer,
});

// Create the store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// coba ii
