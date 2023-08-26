import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { io } from "socket.io-client";
import { GS } from "../Styles";

const socket = io("http://192.168.1.67:3001"); // Insert your own ip address

type Dispatcher = {
	companyID: string;
	dispatcherID: string;
};

const DriverApp = () => {
	const companyID = "Palma";
	const vehicleID = "123"; // Unique identifier for each car

	// Lokacije auta po budvi za testiranje
	// lat: 42.289938, lng: 18.843297
	// lat: 42.288384, lng: 18.843297
	// lat: 42.288384, lng: 18.844397
	// lat: 42.286789, lng: 18.842497
	// lat: 42.293789, lng: 18.841562

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [location, setLocation] = useState({ lat: 42.29263, lng: 18.848562 });

	const [isConnected, setIsConnected] = useState(false);
	// const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
	const [ridePrompt, setRidePrompt] = useState(false);
	const [timeoutNumber, setTimeoutNumber] = useState(10);
	const [timerId, setTimerId] = useState<number | null>(null);
	const [promptTimerId, setPromptTimerId] = useState<number | null>(null);
	const [dispatcher, setDispatcher] = useState<Dispatcher>();

	// const INTERVAL_TIME = 7000;

	useEffect(() => {
		// Send location updates to the server
		socket.on("connect", () => {
			socket.emit("update-location", { vehicleID, companyID, location, connected: true });
			setIsConnected(true);
		});
		socket.on("disconnect", () => {
			console.log("Driver disconnected");
			socket.emit("update-location", { vehicleID, companyID, location, connected: false });

			// clearInterval(interval);
			setIsConnected(false);
		});

		socket.on("sending-prompt", data => {
			// Ovo sam stavio kad nisam slao socket tacno onom auto kojem treba tako da
			// mozda nije vise potrebno al mozda ne moze da skodi jos jedna provjera
			const { car, dispatcher } = data;
			setDispatcher(dispatcher);
			console.log({ dispatcher });
			if (car.vehicleID === vehicleID && car.companyID === companyID) {
				setRidePrompt(true);
			}
		});
		return () => {
			// Clean up socket connection
			socket.disconnect();
			// clearInterval(intervalId); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
		};
	}, []);

	useEffect(() => {
		if (ridePrompt) {
			startTimeout();
		} else {
			clearTimer();
		}
	}, [ridePrompt]);

	function onDisconnect() {
		socket.emit("update-location", { vehicleID, companyID, location, connected: false });
		socket.disconnect();
		// clearInterval(intervalId);
	}

	function onAcceptDecline(button: string) {
		if (button === "Accept") {
			setRidePrompt(false);
			socket.emit("ride-accepted", { vehicleID, dispatcher });
			console.log(button);
		} else {
			setRidePrompt(false);
			console.log(button);
		}
	}

	function startTimeout() {
		const interval = setInterval(() => {
			// Decrement the timeoutNumber by 1
			setTimeoutNumber(prevTimeout => prevTimeout - 1);
		}, 1000);
		setPromptTimerId(interval);
		const id = setTimeout(() => {
			onAcceptDecline("Decline");
			clearInterval(interval);
			setTimeoutNumber(10);
		}, 10000);
		setTimerId(id);
	}

	const clearTimer = () => {
		if (timerId && promptTimerId) {
			clearTimeout(timerId);
			clearTimeout(promptTimerId);
			setTimerId(null);
			setTimeoutNumber(10);
		}
	};

	function onSubmit() {
		socket.emit("update-location", { vehicleID, companyID, location, connected: true });
	}

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

	return (
		<View>
			<Text>Driver App</Text>
			<Text>{isConnected ? "🟢 Connected" : "🔴 Disconnected"}</Text>
			<Text>Company: {companyID}</Text>
			<Text>Car ID: {vehicleID}</Text>
			<Text>Location: </Text>
			<View style={[GS.flexRow, GS.gap5]}>
				<TextInput
					style={{ height: 40 }}
					placeholder={location.lat.toString()}
					onChangeText={newText =>
						setLocation(prevLocation => ({ ...prevLocation, lat: Number(newText) }))
					}
					defaultValue={location.lat.toString()}
				/>

				<TextInput
					style={{ height: 40 }}
					placeholder={location.lng.toString()}
					onChangeText={newText =>
						setLocation(prevLocation => ({ ...prevLocation, lng: Number(newText) }))
					}
					defaultValue={location.lng.toString()}
				/>
			</View>

			<TouchableHighlight onPress={onSubmit}>
				<Text>Submit</Text>
			</TouchableHighlight>
			<TouchableHighlight onPress={onDisconnect}>
				<Text>Disconnect</Text>
			</TouchableHighlight>

			{ridePrompt && (
				<View style={[GS.primaryLight, GS.alignICenter, GS.gap3, GS.px6, GS.py3]}>
					<Text style={[GS.textWhite]}>Accept Ride? {timeoutNumber}</Text>
					<View style={[GS.flexRow, GS.gap6]}>
						<TouchableHighlight
							onPress={() => onAcceptDecline("Accept")}
							style={[GS.px4, GS.py2, styles.buttonAccept]}>
							<Text style={[GS.textWhite]}>Accept</Text>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() => onAcceptDecline("Decline")}
							style={[GS.px4, GS.py2, styles.buttonDecline]}>
							<Text style={[GS.textWhite]}>Decline</Text>
						</TouchableHighlight>
					</View>
				</View>
			)}
		</View>
	);
};

export default DriverApp;

const styles = StyleSheet.create({
	buttonAccept: {
		backgroundColor: "green",
		borderRadius: 20,
	},
	buttonDecline: {
		backgroundColor: "red",
		borderRadius: 20,
	},
});
