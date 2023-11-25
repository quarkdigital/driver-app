import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
	children: string;
	// TODO: Check what to do when different font weights since this wouldnt be best practice
	fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
	primary: boolean;
}

function CustomText({children, fontWeight, primary }: Props) {
	return (
		<Text style={[styles.text, {color: primary ? "#FFF" : "#000", fontWeight: fontWeight || "normal"}]}>{children}</Text>
	);
}


const styles = StyleSheet.create({
	text: {
		fontFamily: "Poppins",
		textAlign: "center",		
		fontStyle: "normal",
		lineHeight: 24
	}
});

export default CustomText;