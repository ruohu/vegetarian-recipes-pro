import { combineReducers } from "redux";
import checkedReducer from "./checkedReducer";

const rootReducer = combineReducers({
  checkedReducer: checkedReducer,
})

export default rootReducer;