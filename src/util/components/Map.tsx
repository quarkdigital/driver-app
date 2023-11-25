import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import { WebView } from "react-native-webview";
import mapTemplate from "../../../android/map-template";

export default function App() {
	let webRef = undefined;
    
	return (
		<View style={styles.container}>
			<WebView
				ref={(r) => (webRef = r)}
				style={styles.map}
				originWhitelist={["*"]}
				source={{ html: mapTemplate }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		zIndex: -1,
		width: "100%",
		height: "100%",
		position: "absolute"
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		padding: 10,
	},
	textInput: {
		flex: 1,
		borderColor: "gray",
		borderWidth: 1,
		marginRight: 10,
		padding: 5,
	},
	map: {
		flex: 1,
	},
});
