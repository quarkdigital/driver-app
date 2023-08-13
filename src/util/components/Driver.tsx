import React, { useEffect, useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { io } from "socket.io-client";

const socket = io("http://192.168.1.67:3001"); // Insert your own ip address

const DriverApp = () => {
	const companyID = "Palma";
	const vehicleID = "123"; // Unique identifier for each car

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [location, setLocation] = useState({ lat: 42.289938, lng: 18.843297 });

	const [isConnected, setIsConnected] = useState(false);
	// const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

	// const INTERVAL_TIME = 7000;

	useEffect(() => {
		// Send location updates to the server
		socket.emit("updateLocation", { vehicleID, companyID, location, connected: true });

		socket.on("connect", () => setIsConnected(true));
		socket.on("disconnect", () => {
			console.log("Driver disconnected");
			socket.emit("DisconnectionOfCar", {
				vehicleID,
				companyID,
				location: location,
				connected: false,
			});
			// clearInterval(interval);
			setIsConnected(false);
		});

		// const interval = setInterval(() => {
		// 	const newLocation = { lat: Math.random(), lng: Math.random() };
		// 	setLocation(newLocation);
		// 	socket.emit("updateLocation", {
		// 		vehicleID,
		// 		companyID,
		// 		location: newLocation,
		// 		connected: true,
		// 	});
		// }, INTERVAL_TIME);
		// setIntervalId(interval);

		return () => {
			// Clean up socket connection
			socket.disconnect();
			// clearInterval(intervalId); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
		};
	}, []);

	function onDisconnect() {
		socket.emit("DisconnectionOfCar", {
			vehicleID,
			companyID,
			location: location,
			connected: false,
		});
		socket.disconnect();
		// clearInterval(intervalId);
	}

	return (
		<View>
			<Text>Driver App</Text>
			<Text>{isConnected ? "🟢 Connected" : "🔴 Disconnected"}</Text>
			<Text>Company: {companyID}</Text>
			<Text>Car ID: {vehicleID}</Text>
			<Text>
				Location: {location.lat}, {location.lng}
			</Text>
			<TouchableHighlight onPress={onDisconnect}>
				<Text>Disconnect</Text>
			</TouchableHighlight>
		</View>
	);
};

export default DriverApp;
