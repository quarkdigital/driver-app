import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { io } from "socket.io-client";
import { GS } from "../Styles";
import MapView, { Marker } from "react-native-maps";

const socket = io("http://192.168.1.94:3001/Palma"); // Insert your own ip address

type Dispatcher = {
	companyID: string;
	dispatcherID: string;
};

type Location = {
	lat: number;
	lng: number;
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
	const [location, setLocation] = useState<Location>({ lat: 42.29263, lng: 18.848562 });
	const mapRef = useRef<MapView | null>(null);
	const [isConnected, setIsConnected] = useState(false);
	// const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
	const [ridePrompt, setRidePrompt] = useState(false);
	const [timeoutNumber, setTimeoutNumber] = useState(10);
	const [timerId, setTimerId] = useState<NodeJS.Timer | null>(null);
	const [promptTimerId, setPromptTimerId] = useState<NodeJS.Timer | null>(null);
	const [dispatcher, setDispatcher] = useState<Dispatcher>();
	const [pickUpPassengerLocation, setPickUpPassengerLocation] = useState<Location | undefined>();
	// TODO: taximetar status se mjenja u odnosu na status na fizickom uredjaju
	// ovaj state je ovakav samo radi testiranja
	const [taxiMeterStatus, setTaxiMeterStatus] = useState<"ON" | "OFF">("OFF");
	const [vehicleStatus, setVehicleStatus] = useState<
		"pickingUp" | "droppingOff" | "onPause" | "free" | "droppingOffToPickUp"
	>("free");

	const budva = {
		latitude: 42.29,
		longitude: 18.84,
		latitudeDelta: 0.02,
		longitudeDelta: 0.02,
	};

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
			const { car, dispatcher, passengerLocation } = data;
			setPickUpPassengerLocation({
				lat: passengerLocation.lat,
				lng: passengerLocation.lng,
			});
			setDispatcher(dispatcher);
			console.log({ passengerLocation });
			// Ovo sam stavio kad nisam slao socket tacno onom auto kojem treba tako da
			// mozda nije vise potrebno al mozda ne moze da skodi jos jedna provjera
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
			vehicleStatus === "droppingOff" && setVehicleStatus("droppingOffToPickUp");
			vehicleStatus === "free" && setVehicleStatus("pickingUp");
			socket.emit("ride-accepted", { vehicleID, dispatcher });
			console.log({ button, pickUpPassengerLocation, vehicleStatus });
		} else {
			setRidePrompt(false);
			// Ovo sam stavio da u slucaju da nodje do neke greske i vozacu koji vec kupi klijenta se slucajno
			// posalje prompt za sledecu voznju i on je odbije jer vec ima voznju da mu se ne obrise trenutni
			// passangerPickUpLocation \/ \/ \/
			vehicleStatus !== "pickingUp" && setPickUpPassengerLocation(undefined);
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
		<View style={styles.pageContainer}>
			<MapView ref={mapRef} style={styles.map} initialRegion={budva}>
				{/* Add markers */}
				{pickUpPassengerLocation &&
					(vehicleStatus === "pickingUp" || vehicleStatus === "droppingOffToPickUp") && (
						<Marker
							coordinate={{
								latitude: pickUpPassengerLocation.lat,
								longitude: pickUpPassengerLocation.lng,
							}}
							title="Marker Title"
							description="Marker Description"
							pinColor="red"
						/>
					)}
				<Marker
					coordinate={{ latitude: location.lat, longitude: location.lng }}
					title="Marker Title"
					description="Marker Description"
					pinColor="blue"
				/>
			</MapView>
			<View
				style={[
					styles.taximeter,
					GS.primaryLight,
					GS.alignICenter,
					GS.gap3,
					GS.px6,
					GS.py3,
				]}>
				<Text style={[GS.textWhite]}>Taximeter</Text>
				<View style={[GS.flexRow, GS.gap6]}>
					<TouchableHighlight
						onPress={() => setTaxiMeterStatus("ON")}
						style={[GS.px4, GS.py2, styles.buttonAccept]}>
						<Text style={[GS.textWhite]}>ON</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => setTaxiMeterStatus("OFF")}
						style={[GS.px4, GS.py2, styles.buttonDecline]}>
						<Text style={[GS.textWhite]}>OFF</Text>
					</TouchableHighlight>
				</View>
			</View>
			<View style={[styles.informationContainer]}>
				<Text>Driver App</Text>
				<Text>{isConnected ? "🟢 Connected" : "🔴 Disconnected"}</Text>
				<Text>Company: {companyID}</Text>
				<Text>Car ID: {vehicleID}</Text>
				<Text>Status: {vehicleStatus}</Text>
				<Text>Taximeter: {taxiMeterStatus === "ON" ? "🟢 ON" : "🔴 OFF"}</Text>
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
			</View>
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
