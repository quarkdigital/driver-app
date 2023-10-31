import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";
import { reusableStyles } from "../Styles";

export type Props = {
	name: string;
	imageURL: any;
	active: string;
	index: number;
};

function DriverCard({ name, imageURL, active, index }: Props) {
	return (
		<View style={[t.flexRow, t.itemsStart, t.justifyStart, t.p4]}>
			<Image source={imageURL} style={styles.image} />
			<View style={[t.flexCol, t.justifyCenter, t.itemsStart, t.pS3]}>
				<Text style={[reusableStyles.smallWhiteText, { fontWeight: "500" }]}>{name}</Text>
				<Text style={styles.status}>{active}</Text>
			</View>
			<View style={index === 0 ? styles.noSeparator : styles.separator}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 50,
		borderRadius: 50
	},
	status: {
		color: "rgba(255, 255, 255, 0.70)",
		fontFamily: "Poppins",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "400",
		lineHeight: 20,
		paddingTop: 5
	},
	separator: {
		borderBottomWidth: 1,
		borderBottomColor: "rgba(255, 255, 255, 0.10)",
		width: "155%",
		position: "absolute",
		left: -10,
		right: 0,
		top: 0
	},
	noSeparator: {
		borderBottomWidth: 0,
		width: "0%"
	}
});

export default DriverCard;
