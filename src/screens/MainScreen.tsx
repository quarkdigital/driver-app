import React from "react";
import Navbar from "../util/components/Navbar";
import { View } from "react-native";
import { t } from "react-native-tailwindcss";
const MainScreen = () => {
	return (
		<View style={[t.wFull, t.hFull]}>
		    <Navbar />
		</View>
	);
}

export default MainScreen;