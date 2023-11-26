import React from "react";
import { StyleSheet, View } from "react-native";
import MainMap from "./src/components/MainMap";
import { enableLatestRenderer } from "react-native-maps";
import DriverTab from "./src/components/DriverTab";
import { useFonts } from "expo-font";
import { customFonts } from "./src/util/fonts";

enableLatestRenderer();

export default function App() {
	const [fontsLoaded] = useFonts(customFonts);

	// Load fonts asynchronously

	if (!fontsLoaded) {
		return null;
	}
	return (
		<View style={styles.container}>
			<MainMap />
			<DriverTab />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		width: "100%",
		height: "100%",
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
