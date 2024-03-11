import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { t } from "react-native-tailwindcss";
import { FF } from "../../util/Styles";

type Props = {
	onPress: () => void;
	label: string;
	style: "fill" | "outline";
};

export default function RoundButton({ onPress, label, style }: Props) {
	return (
		<TouchableHighlight
			underlayColor={
				style === "outline" ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.85)"
			}
			style={[
				t.roundedFull,
				style === "fill" ? styles.fillClass : styles.outlineClass,
				styles.button,
			]}
			onPress={onPress}>
			<Text
				style={[
					styles.text,
					FF.poppinsBold,

					style === "fill" ? { color: "#1C2129" } : { color: "white" },
				]}>
				{label}
			</Text>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	button: { paddingTop: 10, paddingBottom: 7, width: "100%", marginVertical: 8 },
	text: {
		color: "white",
		padding: 0,
		margin: 0,

		textAlign: "center",
		textTransform: "uppercase",
	},
	fillClass: {
		backgroundColor: "white",
	},

	outlineClass: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "white",
	},
});
