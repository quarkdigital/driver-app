import { combineReducers } from "redux";
import driverReducer from "./reducers/driverSlice";

const rootReducer = combineReducers({
	driver: driverReducer,
});

export default rootReducer;
