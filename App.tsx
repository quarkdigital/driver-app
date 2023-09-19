import React from "react";
import { StyleSheet, View } from "react-native";
import DriverApp from "./src/util/components/Driver";
import { enableLatestRenderer } from "react-native-maps";

enableLatestRenderer();

export default function App() {
	return (
		<View style={styles.container}>
			<DriverApp />
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
