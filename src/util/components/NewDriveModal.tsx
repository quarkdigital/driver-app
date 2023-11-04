import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";
import Button from "./Button";
import { reusableStyles } from "../styles";
import CustomText from "./CustomText";

function NewDriveModal() {
	const [accept, setAccept] = useState(false);

	return (
		<View
			style={[
				t.flexCol,
				styles.newDriveModal,
				!accept ? [styles.borderLeftGreen, t.itemsStart] : styles.borderTopGreen,
			]}>
			{!accept ? (
				<View style={[t.pS3, t.itemsStart, t.justifyCenter, t.hFull]}>
					<Text style={[reusableStyles.greyText, t.mB1]}>New Ride</Text>
					<CustomText primary={true}>
						Jadranski put 24
					</CustomText>
					<CustomText primary={true}>
						3.2 km • 3.5min
					</CustomText>
					<Button
						label="Accept(8s)"
						primary={true}
						imageUrl={require("../../../assets/check.png")}
						buttonStyle={{ flexDirection: "row", width: "310px", marginTop: 10 }}
						iconSize={{ width: 15, height: 15 }}
						onPress={() => setAccept(true)}
					/>
				</View>
			) : (
				<View style={[t.flexCol, t.justifyBetween, t.hFull, t.itemsStart]}>
					<View style={[t.flexRow, t.justifyBetween, t.wFull, t.itemsStart]}>
						<View style={[t.flexCol, t.itemsStart, t.pT1]}>
							<Text style={reusableStyles.greyText}>ADDRESS</Text>
							<CustomText primary={true}>Jadranski Put 24</CustomText>
						</View>
						<View style={[t.flexCol, t.itemsCenter, t.pT1]}>
							<Text style={reusableStyles.greyText}>DISTANCE</Text>
							<CustomText primary={true} fontWeight="700">550M</CustomText>
						</View>
					</View>
					<View
						style={[
							t.flexCol,
							t.justifyBetween,
							t.itemsCenter,
							t.mT2,
							{ height: 110 }
						]}>
						<Button label="Set Location" primary={true} />
						<Button label="Cancel Ride" primary={false} />
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
		height: 170,
		width: "100%",
		shadowColor: "rgba(0, 0, 0, 0.12)",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 24,
		elevation: 2,
		justifyContent: "flex-start",
		alignItems: "center",
	}
});

export default NewDriveModal;
