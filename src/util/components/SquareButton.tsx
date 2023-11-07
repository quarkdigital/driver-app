import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

type Props = {
    onPress: () => void;
    label: string;
	imageUrl: string;
	mobile: boolean;
}

function SquareButton({onPress, label, imageUrl, mobile}: Props) {
	return (
		<TouchableOpacity style={[styles.square]} onPress={onPress}>
			<Image source={{uri: imageUrl}} style={{width: 40, height: 40, resizeMode: "contain"}}/>
			<CustomText primary={true}>{label}</CustomText>
		</TouchableOpacity>
	);
}


const styles = StyleSheet.create({
	square: {
		width: 130,
		height: 130,
		borderRadius: 16,
		borderColor: "#FFFFFF",
		borderWidth: 2,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
});

export default SquareButton;