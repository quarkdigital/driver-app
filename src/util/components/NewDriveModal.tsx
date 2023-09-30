import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";
import { newDriveModalStyle, textStyle } from "../../reusable/styles";
import Button from "./Button";

const NewDriveModal = () => {
	return (
		<View style={[t.flexCol, t.justifyStart, newDriveModalStyle, styles.borderGreen]}>
			<Text style={[textStyle]}>New York</Text>
			<Text style={[textStyle]}>Jadranski put 24</Text>
			<Text style={textStyle}>Jadranski put 24 • Jadranski put 24</Text>	
			<Button title="Accept(8s)" backgroundColor="white" imageURL={require("../../../assets/check.png")} />	
		</View>
	);
};

const styles = StyleSheet.create({
	borderGreen: {
		borderLeftColor: "#80F17E",
		borderWidth: 4,
		borderBottomWidth: 0,
		borderTopWidth: 0,
		borderRightWidth: 0,
	}
})

export default NewDriveModal;