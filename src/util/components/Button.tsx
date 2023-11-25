/* eslint-disable indent */
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { reusableStyles } from "../styles";
import CustomText from "./CustomText";

export type Props = {
	label: string;
	onPress?: () => void;
	imageUrl?: any;
	primary: boolean;	
	marginAroundButton?: number;
	buttonStyle?: object;
	iconSize?: {
		width: number;
		height: number;
	};
	buttonTextStyle?: object;
};

function Button({
	onPress,
	label,
	imageUrl,
	primary,
	marginAroundButton,
	buttonStyle,
	iconSize
}: Props) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				styles.circle,
				primary ? reusableStyles.whiteBackground : styles.transparentBackground,
				{ margin: marginAroundButton },
				buttonStyle
			]}>
			{imageUrl && <Image source={{uri: imageUrl}} style={[styles.image, iconSize]} />}
			<CustomText primary={ primary ? false : true }>
				{label}	
			</CustomText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	circle: {
		width: 300,
		height: 50,
		borderRadius: 50,
		borderColor: "#FFFFFF",
		borderWidth: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	blackText: {
		color: "#000000",
		textAlign: "left",
		fontFamily: "Poppins",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: 24
	},
	image: {
		width: 45,
		height: 45,
		resizeMode: "contain"
	},
	whiteBackground: {
		backgroundColor: "#FFFFFF"
	},
	transparentBackground: {
		backgroundColor: "transparent"
	}
});

export default Button;
