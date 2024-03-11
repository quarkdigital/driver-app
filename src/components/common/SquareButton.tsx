import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { t } from "react-native-tailwindcss";
import { FF } from "../../util/Styles";
import PauseButton from "../../../assets/svg/PauseButton";
import BluetoothIcon from "../../../assets/svg/BluetoothIcon";

type Props = {
	onPress: () => void;
	label: string;
	icon: "pause" | "bluetooth";
};

export default function SquareButton({ onPress, label, icon }: Props) {
	return (
		<TouchableHighlight
			underlayColor="rgba(255,255,255,0.15)"
			style={[t.roundedLg, t.border2, styles.border]}
			onPress={onPress}>
			<View style={[t.flex, t.justifyBetween, t.itemsCenter]}>
				{icon === "pause" ? (
					<PauseButton style={[t.mY2]} />
				) : (
					<BluetoothIcon style={[t.mY2]} />
				)}

				<Text style={[t.textWhite, FF.poppinsBold, t.p0, t.m0, t.textCenter]}>{label}</Text>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	border: {
		borderBottomStartRadius: 16,
		borderTopStartRadius: 16,
		borderTopEndRadius: 16,
		borderBottomEndRadius: 16,
		height: 110,
		width: 110,
		backgroundColor: "transparent",
		borderColor: "#fff",
		paddingTop: 8,
	},
});
