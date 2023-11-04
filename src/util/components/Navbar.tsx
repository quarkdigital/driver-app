import React, { useState } from "react";
import { FlatList, Image, SectionList, StyleSheet, TouchableHighlight, View } from "react-native";
import { t } from "react-native-tailwindcss";
import Button, { Props } from "./Button";
import NewDriveModal from "./NewDriveModal";
import { reusableStyles } from "../styles";
import CustomText from "./CustomText";
import SquareButton from "./SquareButton";
function Navbar() {
	const [newOrderModal, setNewOrderModal] = useState(true);
	const buttons = [
		{
			title: "Pauza",
			imageURL: require("/assets/pause.png"),
		},
		{
			title: "Resetuj Bluetooth",
			imageURL: require("/assets/bluetooth.png"),
		},
	];

	return (
		<View
			style={[
				t.w5_12,
				t.hFull,
				t.h100,
				t.flexCol,
				t.justifyBetween,
				t.itemsCenter,
				reusableStyles.backgroundColor
			]}>
			<View style={[t.wFull, t.flexRow, t.justifyBetween, t.itemsStart, t.p4]}>
				<View style={[t.flexCol]}>
					<CustomText primary={true}>Time:</CustomText>
					<CustomText primary={true}>12:24</CustomText>
				</View>
				<View style={[t.flexCol]}>
					<CustomText primary={true}>Status:</CustomText>
					<CustomText primary={true}>Driving</CustomText>
				</View>
			</View>
			<View style={[t.flexCol, t.itemsCenter, t.justifyStart, {height: 400}]}>
				<Image source={require("../../../assets/logo.png")} style={{width: 150, height: 120, resizeMode: "contain"}}/>
				<View style={[t.flexRow, t.justifyBetween, t.itemsCenter, {width: 280}]}>
					{buttons.map((button) => (
						<SquareButton
							key={button.imageURL}
							label={button.title}
							imageUrl={button.imageURL}
							onPress={() => console.log("marko")}
						/>
					))}
				</View>
			</View>
			{newOrderModal ? (
				<NewDriveModal />
			) : (
				<View style={[styles.logoContainer]}>
					<Image source={require("../../../assets/logo.png")} style={styles.logo} />
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	statusReady: {
		color: "#80F17E",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: 24,
		textDecorationLine: "underline"
	},
	helpAndSupportText: {
		color: "#FFF",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: 24,
		textDecorationLine: "underline"
	},
	logoContainer: {
		backgroundColor: "#242A34",
		height: 180,
		width: "100%",
		shadowColor: "rgba(0, 0, 0, 0.12)",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 24,
		elevation: 2,
		justifyContent: "center",
		alignItems: "center"
	},
	logo: {
		width: 150,
		height: 50
	}
});

export default Navbar;
