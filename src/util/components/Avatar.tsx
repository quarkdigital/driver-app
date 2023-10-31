import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { t } from "react-native-tailwindcss";
import Button from "./Button";
import DriverCard from "./DriverCard";
import { reusableStyles } from "../Styles";
const Avatar = () => {
	const [modal, setModal] = useState(false);
	const [changeDriverModal, setChangeDriverModal] = useState(false);
	useEffect(() => {
		console.log("Modal state:", modal);
	  }, [modal]);
	function onChangeDriver() {
		setChangeDriverModal(!changeDriverModal);
	}

	const buttons = [
		{
			name: "Change Driver",
			img: require("/assets/break.png"),
			backgroundColor: "white",
			onPress: onChangeDriver
		},
		{
			name: "Drive History (tbd)",
			img: require("/assets/pause.png"),
			backgroundColor: "transparent"
		},
		{
			name: "About(tbd)",
			img: require("/assets/break.png"),
			backgroundColor: "transparent"
		},
	];

	const drivers = [
		{
			name: "Marko Scekic",
			active: "Online: 7h ago",
			imageURL: require("../../../assets/someguy.png")
		},
		{
			name: "Uros Stesevic",
			active: "Online: 7h ago",
			imageURL: require("../../../assets/john.png")
		},
		{
			name: "Djordje Popovic",
			active: "Online: 7h ago",
			imageURL: require("../../../assets/marcusaurelius.png")
		}
	];


	return (
		<TouchableOpacity onPress={() => {setModal(!modal); setChangeDriverModal(false);}} style={styles.container}>
			<Image source={require("../../../assets/gay.png")} style={[t.wFull, t.hFull, styles.image]} />
			{modal && <View style={[t.flexCol, t.justifyStart, t.itemsEnd]}>
				<View style={[!changeDriverModal ? styles.modal : styles.changeDriverModal]}>
					<Image source={require("../../../assets/polygon.png")} style={[t.w10, t.h6, t.selfEnd, t.absolute, t.top0, styles.polygon]} />
					{!changeDriverModal && <>
						<View style={[t.flexCol, t.justifyCenter, t.itemsCenter]}>
							<Image source={require("../../../assets/gay.png")} style={[t.wFull, t.hFull, t.border, styles.image, t.borderX0, t.borderY0]} />
							<Text style={[reusableStyles.mediumText, t.mT2]}>George Popovic</Text>
						</View><View style={styles.separator}></View>
						{buttons.map((item) => (
							<Button key={item.name} title={item.name} shape="circle" backgroundColor={item.backgroundColor} onPress={item.onPress}/>
						))}
					</>
					}
					{changeDriverModal && <View style={[t.flexCol, t.justifyStart]}>
						{drivers && drivers.map((item, index) => (
							<DriverCard key={item.name} name={item.name} imageURL={item.imageURL} active={item.active} index={index}/>
						))}
					</View>
					}
				</View>
			</View>
			}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
	   padding: 15,
	   display: "flex",
	   flexDirection: "column",
	   alignItems: "flex-end",
	   position: "absolute",
	   width: "100%",
	   zIndex: 10,
	},
	image: {
		width: 76,
		height: 76,
		borderRadius: 50,
		resizeMode: "contain",
		borderColor: "#000000",
		borderWidth: 4,
	},
	modal: {
		width: 330,
		height: 370,
		backgroundColor: "#1C2129",
		marginTop: 20,
		borderRadius: 16,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 25,
		position: "absolute",
		zIndex: 10,	
		shadowColor: "#171717",
		shadowOffset: {width: 0, height: 0},
		shadowOpacity: 1,
		shadowRadius: 20,
	},
	polygon: {
		top: -10,
		right: 17
	},
	
	separator: {
		borderColor: "#FFFFFF",
		borderWidth: 1,
		width: "100%",
		position: "absolute",
		marginTop: 115,
		opacity: 0.1
	},
	
	changeDriverModal: {
		width: 330,
		height: "auto",
		backgroundColor: "#1C2129",
		marginTop: 20,
		borderRadius: 16,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "flex-start",
		padding: 10
	}
});

export default Avatar;
