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
				t.mY2,
				t.wFull,
				styles.padding,
			]}
			onPress={onPress}>
			<Text
				style={[
					t.textWhite,
					FF.poppinsBold,
					t.p0,
					t.m0,
					t.textCenter,
					t.uppercase,
					style === "fill" ? { color: "#1C2129" } : { color: "white" },
				]}>
				{label}
			</Text>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	padding: { paddingTop: 10, paddingBottom: 7 },
	fillClass: {
		backgroundColor: "white",
	},
	outlineClass: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "white",
	},
});
