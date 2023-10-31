import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";
import Button from "./Button";
import { reusableStyles } from "../Styles";

function NewDriveModal() {
	const [accept, setAccept] = useState(false);

	return (
		<View
			style={[
				t.flexCol,
				t.justifyCenter,
				styles.newDriveModal,
				!accept ? [styles.borderLeftGreen, t.itemsStart] : styles.borderTopGreen,
				t.pS2
			]}>
			{!accept ? (
				<>
					<Text style={[reusableStyles.greyText, t.mB2]}>New Ride</Text>
					<Text style={[reusableStyles.mediumText, t.pB1, t.fontLight]}>
						Jadranski put 24
					</Text>
					<Text style={[reusableStyles.mediumText, t.pB5, t.fontLight]}>
						3.2 km • 3.5min
					</Text>
					<Button
						shape="circle"
						title="Accept(8s)"
						backgroundColor="white"
						imageURL={require("../../../assets/check.png")}
						buttonStyle={{ flexDirection: "row", width: "97%" }}
						iconSize={{ width: 15, height: 15 }}
						onPress={() => setAccept(true)}
						buttonTextStyle={{ paddingLeft: 5 }}
					/>
				</>
			) : (
				<View style={[t.flexCol, t.justifyBetween, t.hFull, t.itemsStart]}>
					<View style={[t.flexRow, t.justifyBetween, t.wFull, t.itemsStart]}>
						<View style={[t.flexCol, t.itemsStart, t.pT3, t.pS3]}>
							<Text style={[]}>ADDRESS</Text>
							<Text style={[reusableStyles.smallWhiteText]}>Jadranski Put 24</Text>
						</View>
						<View style={[t.flexCol, t.itemsCenter, t.pT3, t.pE3]}>
							<Text style={[]}>DISTANCE</Text>
							<Text style={[reusableStyles.smallWhiteText]}>550M</Text>
						</View>
					</View>
					<View
						style={[
							t.flexCol,
							t.justifyBetween,
							t.itemsCenter,
							t.mB3,
							{ height: 115 }
						]}>
						<Button title="Set Location" backgroundColor="white" shape="circle" />
						<Button title="Cancel Ride" backgroundColor="transparent" shape="circle" />
					</View>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	borderLeftGreen: {
		borderLeftColor: "#80F17E",
		borderWidth: 4,
		borderBottomWidth: 0,
		borderTopWidth: 0,
		borderRightWidth: 0
	},
	borderTopGreen: {
		borderTopColor: "#80F17E",
		borderBottomWidth: 0,
		borderTopWidth: 4,
		borderRightWidth: 0,
		borderLeftWidth: 0
	},
	newDriveModal: {
		backgroundColor: "#242A34",
		height: 200,
		width: "100%",
		shadowColor: "rgba(0, 0, 0, 0.12)",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 24,
		elevation: 2,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default NewDriveModal;
