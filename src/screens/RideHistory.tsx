import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";
import Avatar from "../util/components/Avatar";

const RideHistory = () => {
	return (
		<View style={[t.wFull, t.hFull, {backgroundColor: "#1C2129"}]}>
			<View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.top0, t.wFull, t.z10]}>
				<Image source={require("../../assets/logo.png")} style={styles.image} />
				<Text style={styles.text}>Driving History</Text>
				<View style={[t.relative, t.mR6]}>
					<Avatar />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 150,
		height: 50,
		margin: 20
	},
	text: {
		color: "#FFF",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: 20,
	}
})

export default RideHistory;