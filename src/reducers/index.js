import counter from "./counter";
import { combineReducers } from "redux";
import counterClass from "./counterClass";

const rootReducer = combineReducers({
    counter,
    counterClass
});

export default rootReducer;