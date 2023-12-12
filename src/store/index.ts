import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // We'll create this file in the next step

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
