import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Button from "../util/components/Button";
import { t } from "react-native-tailwindcss";
import Avatar from "../util/components/Avatar";
import { useNavigation } from "@react-navigation/native";

const SettingsAndHelp = () => {
	const navigation = useNavigation();
	const buttons = [
		{
			title: "Reset bluetooth",
			imageURL: require("../../assets/pause.png")
		},
		{
			title: "Ride History",
			imageURL: require("../../assets/break.png"),
			onPress: () => navigation.navigate("Ride History")
		},
		{
			title: "Log out",
			imageURL: require("../../assets/pause.png")
		}

	];
	return (
		<View style={[t.wFull, t.hFull, t.flexCol, t.overflowHidden, t.justifyCenter, {backgroundColor: "#1C2129"}]}>
			<View style={[t.flexRow, t.justifyBetween, t.absolute, t.top0, t.wFull, t.z10]}>
				<Image source={require("../../assets/logo.png")} style={styles.image} />
				<View style={[t.absolute, t.right0, t.top0, t.pR6]}>
					<Avatar />
				</View>
			</View>
			<View style={[t.wFull, t.hFull, t.flexRow, t.justifyCenter, t.itemsCenter, ]}>
				{buttons.map((item) => (	
					<Button key={item.title} shape="square" title={item.title} imageURL={item.imageURL} marginAroundButton={50} onPress={item.onPress}/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "150px",
		height: "50px",
		marginLeft: 30,
		marginTop: 20
	}
});

export default SettingsAndHelp;