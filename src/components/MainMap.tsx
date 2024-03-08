import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { t } from "react-native-tailwindcss";
import { socket } from "../util/socketConfig";

type Dispatcher = {
	companyID: string;
	dispatcherID: string;
};

type Location = {
	lat: number;
	lng: number;
};

const DriverApp = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [location, setLocation] = useState<Location>({ lat: 42.29263, lng: 18.848562 });
	const mapRef = useRef<MapView | null>(null);
	const [isConnected, setIsConnected] = useState(false);
	// const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
	const [ridePrompt, setRidePrompt] = useState(false);
	const [timeoutNumber, setTimeoutNumber] = useState(10);
	const [timerId, setTimerId] = useState<number | null>(null);
	const [promptTimerId, setPromptTimerId] = useState<number | null>(null);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [dispatcher, setDispatcher] = useState<Dispatcher>();
	const [pickUpPassengerLocation, setPickUpPassengerLocation] = useState<Location | undefined>();
	const [vehicleStatus, setVehicleStatus] = useState<
		"picking-up" | "dropping-off" | "on-break" | "free" | "dropping-off-to-pickup" | "offline"
	>("free");
	const [rideId, setRideId] = useState<string>();

	const budva = {
		latitude: 42.29,
		longitude: 18.84,
		latitudeDelta: 0.02,
		longitudeDelta: 0.02,
	};

	// const INTERVAL_TIME = 7000;

	// Lokacije auta po budvi za testiranje
	// const carLocations = [
	// 	{ lat: 42.289938, lng: 18.843297 },
	// 	{ lat: 42.288384, lng: 18.843297 },
	// 	{ lat: 42.288384, lng: 18.844397 },
	// 	{ lat: 42.286789, lng: 18.842497 },
	// 	{ lat: 42.293789, lng: 18.841562 },
	// ];

	useEffect(() => {
		// Send location updates to the server
		socket.on("connect", () => {
			socket.emit("driver/update-location", { location });
			setIsConnected(true);
		});

		socket.on("error", error => {
			console.error(error);
		});

		socket.on("disconnect", () => {
			socket.emit("driver/update-location", { location });

			// clearInterval(interval);
			setIsConnected(false);
		});

		socket.on("server/new-ride-request", data => {
			const { pickupLocation, rideId } = data;
			setRideId(rideId);
			setPickUpPassengerLocation({
				lat: pickupLocation.lat,
				lng: pickupLocation.lng,
			});

			setRidePrompt(true);
		});

		// Za updateovanje lokacije
		// const interval = setInterval(() => {
		// 	const newLocation = { lat: Math.random(), lng: Math.random() };
		// 	setLocation(newLocation);
		// 	socket.emit("driver/update-location", {
		// 		location: newLocation,
		// 	});
		// }, INTERVAL_TIME);
		// setIntervalId(interval);

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
		socket.disconnect();
		// clearInterval(intervalId);
	}

	function onAcceptDecline(button: string) {
		if (button === "Accept") {
			setRidePrompt(false);
			vehicleStatus === "dropping-off" && setVehicleStatus("dropping-off-to-pickup");
			vehicleStatus === "free" && setVehicleStatus("picking-up");
			socket.emit("driver/accept-ride", { rideId });
			socket.emit("driver/update-status", { vehicleStatus });
		} else {
			setRidePrompt(false);

			vehicleStatus !== "picking-up" && setPickUpPassengerLocation(undefined);
			socket.emit("driver/decline-ride", { rideId });
		}
	}

	function startTimeout() {
		const interval = setInterval(() => {
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

	return (
		<View style={styles.pageContainer}>
			<MapView ref={mapRef} style={styles.map} initialRegion={budva}>
				{/* Add markers */}
				{pickUpPassengerLocation &&
					(vehicleStatus === "picking-up" ||
						vehicleStatus === "dropping-off-to-pickup") && (
						<Marker
							coordinate={{
								latitude: pickUpPassengerLocation.lat,
								longitude: pickUpPassengerLocation.lng,
							}}
							title="Passenger Location"
							description="Passengers' location marker"
							pinColor="red"
						/>
					)}
				<Marker
					coordinate={{ latitude: location.lat, longitude: location.lng }}
					title="Car Location"
					description="Cars' location marker"
					pinColor="blue"
				/>
			</MapView>

			{/* INFORMARION CONTAINER */}

			<View style={[styles.informationContainer]}>
				<Text>Driver App</Text>
				<Text>{isConnected ? "🟢 Connected" : "🔴 Disconnected"}</Text>
				<Text>Status: {vehicleStatus}</Text>
				{/* <Text>Taximeter: {taxiMeterStatus === "ON" ? "🟢 ON" : "🔴 OFF"}</Text> */}
				<Text>Location: </Text>
				<View style={[t.flexRow]}>
					<TextInput
						style={[{ height: 40 }, t.mR3]}
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

				<TouchableHighlight onPress={onDisconnect}>
					<Text>Disconnect</Text>
				</TouchableHighlight>
			</View>

			{/* Ride Prompt */}

			{ridePrompt && (
				<View style={[t.bgWhite, t.alignCenter, t.pX10, t.pY10, t.z10]}>
					<Text style={[t.textBlack, t.mB1]}>Accept Ride? {timeoutNumber}</Text>
					<View style={[t.flexRow]}>
						<TouchableHighlight
							onPress={() => onAcceptDecline("Accept")}
							style={[t.pX1, t.pY1, t.mL1, styles.buttonAccept]}>
							<Text style={[t.textWhite]}>Accept</Text>
						</TouchableHighlight>
						<TouchableHighlight
							onPress={() => onAcceptDecline("Decline")}
							style={[t.pX4, t.pY2, styles.buttonDecline]}>
							<Text style={[t.textWhite]}>Decline</Text>
						</TouchableHighlight>
					</View>
				</View>
			)}
		</View>
	);
};

export default DriverApp;

const styles = StyleSheet.create({
	pageContainer: { flex: 1, width: "100%" },
	informationContainer: { position: "absolute", zIndex: 1, right: 0, bottom: 0 },
	buttonAccept: {
		backgroundColor: "green",
		borderRadius: 20,
	},
	buttonDecline: {
		backgroundColor: "red",
		borderRadius: 20,
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	taximeter: {
		position: "absolute",
		left: 0,
		bottom: 0,
	},
});
