import React from "react";
import DriverApp from "./src/util/components/Driver";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SettingsAndHelp from "./src/screens/SettingsAndHelp";
import RideHistory from "./src/screens/RideHistory";
import Search from "./src/screens/Search";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator 
				initialRouteName="Search"
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
				<Stack.Screen name="Search"
					component={Search}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

