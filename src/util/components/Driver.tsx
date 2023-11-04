import React from "react";
import { View } from "react-native";
import Navbar from "./Navbar";
import { t } from "react-native-tailwindcss";

function DriverApp() {
	return (
		<View style={[t.wFull, t.hFull, t.flexRow]}>
			<Navbar />
			{/* <Avatar /> */}
		</View>
	);
}

export default DriverApp;
