import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { t } from "react-native-tailwindcss";
import Button from "./Button";
const Avatar = () => {
	const [modal, setModal] = useState(true);
	const buttons = [
		{
			name: "Change Driver",
			img: require("/assets/break.png"),
			backgroundColor: "white"
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
	return (
		<TouchableOpacity onPress={() => setModal(!modal)} style={styles.container}>
			<Image source={require("../../../assets/gay.png")} style={[t.wFull, t.hFull, styles.image]} />
			{modal && <View style={[t.flexCol, t.justifyStart, t.itemsEnd]}>
				<View style={[styles.modal]}>
					<Image source={require("../../../assets/polygon.png")} style={[t.w10, t.h6, t.selfEnd, t.absolute, t.top0, styles.polygon]} />
					<View style={[t.flexCol, t.justifyCenter, t.itemsCenter]}>
						<Image source={require("../../../assets/gay.png")} style={[t.wFull, t.hFull, t.border, styles.image, t.borderX0, t.borderY0]} />
						<Text style={styles.text}>George Popovic</Text>
					</View>
					<View style={styles.separator}></View>
					{buttons.map((item) => (
						<Button key={item.name} title={item.name} shape="circle" backgroundColor={item.backgroundColor}/>
					))}
				</View>
			</View>}
				 
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
	   padding: 15,
	   display: "flex",
	   flexDirection: "column",
	   alignItems: "flex-end",
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
		padding: 25
	},
	polygon: {
		top: -10,
		right: 17
	},
	text: {
		color:"#FFF",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: 24,
		marginTop: 10
	},
	separator: {
		borderColor: "#FFFFFF",
		borderWidth: 1,
		width: "100%",
		position: "absolute",
		marginTop: 115,
		opacity: 0.1
	},
});

export default Avatar;
