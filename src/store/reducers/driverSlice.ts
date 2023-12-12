import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DriverState {
	drivingStatus: "driving" | "picking-up" | "dropping-off" | "on-pause" | "dropping-off-pick-up";
}

const initialState: DriverState = {
	drivingStatus: "driving",
};

const driverSlice = createSlice({
	name: "driver",
	initialState,
	reducers: {
		setDrivingStatus: (state, action: PayloadAction<DriverState["drivingStatus"]>) => {
			state.drivingStatus = action.payload;
		},
	},
});

export const { setDrivingStatus } = driverSlice.actions;
export default driverSlice.reducer;
