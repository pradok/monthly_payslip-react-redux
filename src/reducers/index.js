import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import employeePay from "../modules/employeePay/reducers/employeePay";

export const reducers = combineReducers({
  routing: routerReducer,
  employeePay
});
