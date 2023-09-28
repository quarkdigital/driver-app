import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import DriverApp from "./src/util/components/Driver";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SettingsAndHelp from "./src/screens/SettingsAndHelp";
import RideHistory from "./src/screens/RideHistory";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator 
				initialRouteName="Ride History"
				screenOptions={{headerShown: false}}>
				<Stack.Screen 
					name="Home"
					component={DriverApp}
				/>
				<Stack.Screen name="Settings"
					component={SettingsAndHelp}
				/>
				<Stack.Screen name="Ride History"
					component={RideHistory}
				/>
			</Stack.Navigator>
		</NavigationContainer>
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
