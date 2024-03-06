import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { t } from "react-native-tailwindcss";
import { CLR, Colors, FF, txtCLR } from "../util/Styles";
import SquareButton from "./common/SquareButton";
import GrayLogo from "../../assets/svg/GrayLogo";
import RoundButton from "./common/RoundButton";
import { useDispatch, useSelector } from "react-redux";
import { setDrivingStatus } from "../store/reducers/driverSlice";

export default function DriverTab() {
	// const [drivingStatus, setDrivingStatus] = useState<
	// 	"driving" | "picking-up" | "dropping-off" | "on-pause" | "dropping-off-pick-up"
	// >("driving");
	const dispatch = useDispatch();
	const drivingStatus = useSelector(state => state.driver.drivingStatus);

	let statusColor;
	let statusText;
	switch (drivingStatus) {
		case "driving":
			statusColor = Colors.lightGreen;
			statusText = "slobodan";
			break;
		case "picking-up":
			// eslint-disable-next-line indent
			statusColor = Colors.yellow;
			statusText = "preuzimanje";
			break;
		case "dropping-off":
			statusColor = Colors.yellow;
			statusText = "u voznji";

			break;
		case "dropping-off-pick-up":
			statusColor = Colors.yellow;
			statusText = "u voznji";

			break;
		case "on-pause":
			statusColor = Colors.brightGray;
			statusText = "pauza";

			break;
	}

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
				styles.border,
			]}>
			<View style={[t.flexRow, t.justifyBetween]}>
				<View style={[t.h12]}>
					<Text
						style={[FF.poppinsLight, t.uppercase, t.textXs, t.textWhite, t.opacity75]}>
						vrijeme
					</Text>
					<Text style={[FF.poppinsBold, t.textBase, t.textWhite]}>12:34</Text>
				</View>
				<View style={[t.itemsEnd]}>
					<Text
						style={[FF.poppinsLight, t.uppercase, t.textXs, t.textWhite, t.opacity75]}>
						Status
					</Text>
					<TouchableWithoutFeedback
						onPress={() => dispatch(setDrivingStatus("picking-up"))}>
						<Text
							style={[
								FF.poppinsBold,
								t.uppercase,
								t.textBase,
								txtCLR.lightGreen,
								{ color: statusColor },
							]}>
							{statusText}
						</Text>
					</TouchableWithoutFeedback>
				</View>
			</View>
			{drivingStatus === "driving" && (
				<View style={[t.flexRow, t.justifyBetween]}>
					<SquareButton onPress={() => {}} label="Pauza" icon="pause" />
					<SquareButton onPress={() => {}} label="Resetuj Bluetooth" icon="bluetooth" />
				</View>
			)}
			{drivingStatus === "driving" && (
				<View style={[t.h12, t.itemsCenter]}>
					<GrayLogo />
				</View>
			)}

			{drivingStatus === "picking-up" && (
				<View style={[t.flex, t.itemsCenter]}>
					<Text style={[t.textWhite, t.uppercase, FF.poppinsBold, t.textBase]}>
						Jadranski put 24
					</Text>
					<View style={[CLR.gray, { height: 5.5 }, t.w5, t.roundedFull, t.mY1]}></View>
					<Text
						style={[
							t.textWhite,
							t.uppercase,
							FF.poppinsBold,
							t.text2xl,
							{ marginBottom: -12 },
						]}>
						500M
					</Text>
					<Text
						style={[t.textWhite, t.opacity75, t.uppercase, FF.poppinsLight, t.textXs]}>
						udaljenost
					</Text>
				</View>
			)}
			{drivingStatus === "picking-up" && (
				<View style={[t.mB4]}>
					<RoundButton onPress={() => {}} label="Upisi lokaciju" style="fill" />
					<RoundButton
						onPress={() => dispatch(setDrivingStatus("driving"))}
						label="Otkazi voznju"
						style="outline"
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	border: {
		borderTopEndRadius: 16,
		borderBottomEndRadius: 16,
	},
});
