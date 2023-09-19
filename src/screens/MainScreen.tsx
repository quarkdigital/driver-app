import React from "react";
import Navbar from "../util/components/Navbar";
import { View } from "react-native";
import { t } from "react-native-tailwindcss";
import GoogleMap from "../util/components/GoogleMap";
function MainScreen() {
	return (
		<View style={[t.wFull, t.hFull]}>
			<GoogleMap />
		    <Navbar />
		</View>
	);
}

export default MainScreen;