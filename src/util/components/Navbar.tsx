import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { t } from "react-native-tailwindcss";
import Button from "./Button";

const Navbar = () => {
	
	const [openModal, setOpenModal] = useState(true);

	const buttons = [
		{
			name: "Start Break",
			img: require("/assets/break.png")
		},
		{
			name: "Short Pause",
			img: require("/assets/pause.png")
		},
		{
			name: "Dispatcher",
			img: require("/assets/break.png")
		},
    
	];
	return openModal ? (
		<View style={[t.w5_12, t.hFull, t.h100, t.flexCol, t.justifyBetween, t.absolute, styles.containerColor, t.itemsCenter]}>
			<View style={[t.wFull, t.flexRow, t.justifyBetween, t.itemsStart, t.p4]}>
				<TouchableHighlight onPress={() => setOpenModal(!openModal)}>
					<Image source={require("../../../assets/burger.png")} style={[t.w6, t.h5, t.mT2]} />
				</TouchableHighlight>
				<View style={[t.flexCol]}>
					<Text style={[t.textWhite,t.textSm ,styles.statusText]}>Status:</Text>
					<Text style={[t.textWhite, styles.statusReady]}>Ready</Text>
				</View>
				<Text style={[t.textWhite, t.h100, t.textBase]}>12:34</Text>
			</View>
			<View style={[t.wFull, t.flexCol, t.justifyBetween, t.itemsCenter, t.hAuto]}>
				<Image
					source={require("../../../assets/logo.png")}
					style={{ width: 180, height: 180, resizeMode: "contain" }}
				/>
				{buttons.map((item) => (
					<Button title={item.name} key={item.name} imageURL={item.img} />
				))}
			</View>
			<Text style={[styles.helpAndSupportText, t.mB4]}>Help & Support</Text>
		</View>
	): <TouchableHighlight onPress={() => setOpenModal(!openModal)}>
		<Image source={require("../../../assets/burger.png")} style={[t.w6, t.h5, t.mT2]} />
	</TouchableHighlight>;
};

const styles = StyleSheet.create({
	containerColor: {
		backgroundColor: "#1C2129"
	},
	statusText: {
		color: "#FFF",
		textAlign: "center",
		fontFamily: "Poppins",
		fontStyles: "normal",
		fontWeight: "300",
		lineHeight: 24,
	},
	statusReady: {
		color: "#80F17E",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: 24,
		textDecorationLine: "underline",
	},
	helpAndSupportText: {
		color: "#FFF",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: 24,
		textDecorationLine: "underline",
	}
});

export default Navbar;
