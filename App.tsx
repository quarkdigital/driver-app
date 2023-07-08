import React from "react";
import { StyleSheet, View } from "react-native";
import DriverApp from "./src/util/components/Driver";

export default function App() {
	return (
		<View style={styles.container}>
			<DriverApp />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
