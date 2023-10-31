import React from "react";
import { View } from "react-native";
import Navbar from "./Navbar";
import { t } from "react-native-tailwindcss";
import Avatar from "./Avatar";

function DriverApp() {
	return (
		<View style={[t.wFull, t.hFull, t.flexRow, t.justifyBetween]}>
			<Navbar />
			<Avatar />
		</View>
	);
}

export default DriverApp;
