import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { t } from "react-native-tailwindcss";
import Button from "./Button";
import { reusableStyles } from "../styles";
import CustomText from "./CustomText";
import { Props } from "./Navbar";
import { acceptRide, store } from "../../redux";
import { useSelector } from "react-redux";

interface AcceptRide {
	value: boolean
}

function NewDriveModal({mobile}: Props) {
	const [closeModal, setCloseModal] = useState(false);
	const acceptedRide = useSelector(state => state?.accepedRide);
	
	
	return (
		!closeModal && <View
			style={[
				t.flexCol,
				mobile ? styles.newDriveModalMobile : styles.newDriveModalNormal,
				!acceptedRide ? [styles.borderLeftGreen] : styles.borderTopGreen,
			]}>
			{mobile && 
			<TouchableOpacity style={[t.absolute, t.wFull, t.hFull, t.z20]} onPress={() => setCloseModal(true)}>
				<Image source={require("../../../assets/cross.png")} style={styles.cross} />	
			</TouchableOpacity>}
			{acceptedRide === null ? (
				<View style={[t.pS3, t.itemsStart, t.justifyCenter, t.hFull, t.z10]}>
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
						buttonStyle={{ width: 270, marginTop: 10, marginRight: 10 }}
						iconSize={{ width: 15, height: 15 }}
						onPress={() => store.dispatch(acceptRide())}
					/>
				</View>
			) : (
				!mobile && <View style={[t.flexCol, t.justifyBetween, t.hFull, t.itemsStart]}>
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
	newDriveModalNormal: {
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
	},
	newDriveModalMobile: {
		backgroundColor: "#242A34",
		height: 170,
		position: "absolute",
		bottom: 10,
		right: 10,
		width: 300,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10
	},
	cross: {
		width: 20, 
		height: 20, 
		resizeMode: "contain", 
		position: "absolute", 
		right: 15, 
		top: 15
	}
});

export default NewDriveModal;
