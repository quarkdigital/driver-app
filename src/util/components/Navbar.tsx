import React, { useEffect, useState } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";
import NewDriveModal from "./NewDriveModal";
import { reusableStyles } from "../styles";
import CustomText from "./CustomText";
import SquareButton from "./SquareButton";
import Button from "./Button";
import { isMobile } from "../util";

export type Props = {
	mobile?: boolean;
	acceptedRide?: boolean;
}

function Navbar({acceptedRide}: Props) {
	const [newOrderModal, setNewOrderModal] = useState(false);
	const [mobile, setMobile] = useState<boolean>(false);
	useEffect(() => {
	  setMobile(isMobile());
	}, []);
	
	const buttons = [
		{
			title: "Pauza",
			imageURL: require("../../../assets/pause.png"),
		},
		{
			title: "Resetuj Bluetooth",
			imageURL: require("../../../assets/bluetooth.png"),
		},
	];
	

	return (
		<View
			style={[styles.container]}>
			<View style={[t.wFull, t.flexRow, t.justifyBetween, t.itemsStart, t.p4]}>
				<View style={[t.flexCol]}>
					<CustomText primary={true}>Time:</CustomText>
					<CustomText primary={true}>12:24</CustomText>
				</View>
				<View style={[t.flexCol]}>
					<CustomText primary={true}>Status:</CustomText>
					<CustomText primary={true}>Driving</CustomText>
				</View>
			</View>	
			{!acceptedRide ? (
				<View style={[t.flexCol, t.itemsCenter, t.justifyCenter, t.hFull, t.absolute, t.top0, t.bottom0]}>
					<View style={[t.flexRow, t.justifyBetween, t.itemsCenter, {width: 220}]}>
						{buttons.map((button) => (
							<SquareButton
								key={button.imageURL}
								label={button.title}
								imageUrl={button.imageURL}
								onPress={() => console.log("marko")}
								mobile={mobile}
							/>
						))}
					</View>
					{<Image source={require("../../../assets/logo.png")} style={mobile ? styles.logoMobile : styles.logoNormal} />}
				</View> 
			) : (
				<View style={[t.flexCol, t.justifyBetween, t.itemsCenter]}>
					<View style={[t.flexCol, t.justifyCenter, t.itemsCenter]}>
						<CustomText primary={true}>Jadranski Put 25</CustomText>
						<CustomText primary={true} fontWeight="900"> 550 M</CustomText>
						<Text style={reusableStyles.greyText}>Distance</Text>
					</View>
					<View style={[t.flexCol, t.justifyCenter, t.itemsCenter]}>
						<Button label="Set Location" primary={true} buttonStyle={{width: 250, marginBottom: 10}} />
						<Button label="Cancel Ride" primary={false} buttonStyle={{width: 250}} />
					</View>
				</View>	
			)}
			{newOrderModal && !mobile ? (
				<NewDriveModal />
			) : (
				!mobile && !acceptedRide && <View style={!mobile ? styles.logoContainer : ""}>
					<Image source={require("../../../assets/logo.png")} style={styles.logoMobile} />
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		...t.hFull,
		...t.h100,
		...t.flexCol,
		...t.justifyBetween,
		...t.itemsCenter,
		...reusableStyles.backgroundColor,
		width: 250,
	},
	statusReady: {
		color: "#80F17E",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: 24,
		textDecorationLine: "underline"
	},
	helpAndSupportText: {
		color: "#FFF",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: 24,
		textDecorationLine: "underline"
	},
	logoContainer: {
		backgroundColor: "#242A34",
		height: 180,
		width: "100%",
		shadowColor: "rgba(0, 0, 0, 0.12)",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 24,
		elevation: 2,
		justifyContent: "center",
		alignItems: "center"
	},
	logo: {
		width: 150,
		height: 50
	},
	logoNormal: {
		width: 150, height: 120, resizeMode: "contain"
	},
	logoMobile: {
		width: 100,
		height: 50,
		resizeMode: "contain",
		position: "absolute",
		bottom: 0
	}	
});

export default Navbar;
