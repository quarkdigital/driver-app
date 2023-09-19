import React from "react";
import { View } from "react-native";
import { t } from "react-native-tailwindcss";
import MainScreen from "../../screens/MainScreen";

const DriverApp = () => {
	return (
		<View style={[t.wFull, t.hFull]}>
			<MainScreen />
		</View>
	);
};


export default DriverApp;
