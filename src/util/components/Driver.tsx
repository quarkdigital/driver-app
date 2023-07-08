import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001", { transports: ["websocket"] });

const DriverApp = () => {
	// const carId = "123"; // Unique identifier for each car
	// const location = { lat: 37.123, lng: -122.456 }; // Example location data

	const [isConnected, setIsConnected] = useState(false);
	const [messages, setMessages] = useState<string[]>([]);
	const [value, setValue] = useState("");

	useEffect(() => {
		// Send location updates to the server
		// console.log("Sending location update:", { carId, location });
		// socket.emit("updateLocation", { carId, location });

		socket.on("connect", () => setIsConnected(true));
		socket.on("disconnect", () => setIsConnected(false));
		socket.on("message", onMessage);

		// Log a message when the socket connection is established
		console.log("Socket connection status:", socket.connected);

		return () => {
			// Clean up socket connection
			// socket.disconnect();
			// console.log("Driver app disconnected from the server.");

			socket.off("connect"); // add func
			socket.off("disconnect"); // add func
			socket.off("message", onMessage);
		};
	}, []);

	function onMessage(message: string) {
		setMessages(prevVal => [...prevVal, message]);
	}

	function onClickSend() {
		socket.emit("message", value);
		setValue("");
	}

	return (
		<View>
			<Text>Driver App</Text>
			{/* <Text>Car ID: {carId}</Text>
			<Text>
				Location: {location.lat}, {location.lng}
			</Text> */}
			<Text>{isConnected ? "🟢 Connected" : "🔴 Disconnected"}</Text>

			{messages.map((message, index) => (
				<Text key={index}>{message}</Text>
			))}
			<TextInput placeholder="Your message" value={value} onChangeText={setValue} />
			<TouchableWithoutFeedback onPress={onClickSend}>
				<Text>Send</Text>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default DriverApp;
