import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import { WebView } from "react-native-webview";
import mapTemplate from "../../../android/map-template";

export default function App() {
	let webRef = undefined;

	const [mapCenter, setMapCenter] = useState("-121.913, 37.361");
    
	const onButtonPress = () => {
		const [lng, lat] = mapCenter.split(",");
		webRef.injectJavaScript(`
        map.setCenter([
          ${parseFloat(lng)},
          ${parseFloat(lat)}
        ])
      `);
	};
    
	const handleMapEvent = (event) => {
		setMapCenter(event.nativeEvent.data);
	};
    
	return (
		<View style={styles.container}>
			<WebView
				ref={(r) => (webRef = r)}
				onMessage={handleMapEvent}
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
