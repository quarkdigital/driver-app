/* eslint-disable indent */
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export type Props = {
    title: string;
    onPress?: () => void;
    imageURL?: any;
	shape: "square" | "circle";
	backgroundColor?: "white" | "transparent"
	marginAroundButton?: number;
}

const Button = ({ onPress, title, imageURL, shape, backgroundColor, marginAroundButton }: Props) => (
	<TouchableOpacity
		onPress={onPress}
		style={[ shape === "square" ? styles.square : styles.circle, backgroundColor === "white" ? styles.whiteBackground : styles.transparentBackground, {margin: marginAroundButton}]}
	>
        {imageURL && <Image source={imageURL} style={[styles.image]}/>}
		<Text style={[styles.text, backgroundColor === "white" ? styles.blackText : styles.text]}>
			{title}
		</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	square: {
		width: 120,
		height: 120,
		borderRadius: 16,
		borderColor: "#FFFFFF",
		borderWidth: 2,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
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
	text: {
		color: "#FFF",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: 24,
	},
	blackText: {
		color: "#000000",
		textAlign: "left",
		fontFamily: "Poppins",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: 24,
	},
    image: {
        width: 45,
        height: 45,
		resizeMode: "contain", 
    },
	whiteBackground: {
		backgroundColor: "#FFFFFF"
	},
	transparentBackground: {
		backgroundColor: "transparent"
	},
});

export default Button;