/* eslint-disable indent */
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    title: string;
    onPress?: () => void;
    imageURL: any;
}

const Button = ({ onPress, title, imageURL }: Props) => (
	<TouchableOpacity
		onPress={onPress}
		style={[
			styles.button,
		]}
	>
        <Image source={imageURL} style={[styles.image]}/>
		<Text style={[styles.text]}>
			{title}
		</Text>
	</TouchableOpacity>
);
  
// ...
const styles = StyleSheet.create({
	button: {
		width: "300px",
		height: "52px",
		backgroundColor: "transparent",
		borderRadius: 100,
		borderColor: "#FFF",
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
		margin: 10
	},
	text: {
		color: "#FFF",
		textAlign: "left",
		fontFamily: "Poppins",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: 24,
		width: 90
	},
    image: {
        width: 20,
        height: 20,
		resizeMode: "contain",
		marginRight: 10 
    }
});

export default Button;