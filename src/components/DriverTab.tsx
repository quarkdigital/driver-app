import React from "react";
// import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { t } from "react-native-tailwindcss";
import { CLR, FF, txtCLR } from "../util/Styles";
import SquareButton from "./common/SquareButton";
import GrayLogo from "../../assets/svg/GrayLogo";

export default function DriverTab() {
	return (
		<View
			style={[
				t.absolute,
				t.w2_5,
				t.left0,
				CLR.darkBlue,
				t.hFull,
				t.pT6,
				t.pX6,
				t.flex,
				t.justifyBetween,
			]}>
			<View style={[t.flexRow, t.justifyBetween]}>
				<View style={[t.h12]}>
					<Text
						style={[FF.poppinsLight, t.uppercase, t.textXs, t.textWhite, t.opacity75]}>
						Time
					</Text>
					<Text style={[FF.poppinsBold, t.textBase, t.textWhite]}>12:34</Text>
				</View>
				<View style={[t.itemsEnd]}>
					<Text
						style={[FF.poppinsLight, t.uppercase, t.textXs, t.textWhite, t.opacity75]}>
						Status
					</Text>
					<Text style={[FF.poppinsBold, t.uppercase, t.textBase, txtCLR.lightGreen]}>
						Driving
					</Text>
				</View>
			</View>
			<View style={[t.flexRow, t.justifyBetween]}>
				<SquareButton onPress={() => {}} label="Pauza" icon="pause" />
				<SquareButton onPress={() => {}} label="Resetuj Bluetooth" icon="bluetooth" />
			</View>
			<View style={[t.h12, t.itemsCenter]}>
				<GrayLogo />
			</View>
		</View>
	);
}
