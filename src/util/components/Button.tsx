/* eslint-disable indent */
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    title: string;
    onPress?: () => void;
    imageURL?: any;
	shape: "square" | "circle";
	backgroundColor?: "white" | "transparent"
}

const Button = ({ onPress, title, imageURL, shape, backgroundColor }: Props) => (
	<TouchableOpacity
		onPress={onPress}
		style={[ shape === "square" ? styles.square : styles.circle, backgroundColor === "white" ? styles.whiteBackground : styles.transparentBackground]}
	>
        {imageURL && <Image source={imageURL} style={[styles.image]}/>}
		<Text style={[styles.text, backgroundColor === "white" ? styles.blackText : styles.text]}>
			{title}
		</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	square: {
		width: 128,
		height: 128,
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
		textAlign: "left",
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