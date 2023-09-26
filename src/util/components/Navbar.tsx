import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { t } from "react-native-tailwindcss";
import Button, { Props } from "./Button";

const Navbar = () => {
	
	const [openModal, setOpenModal] = useState(true);

	const buttons = [
		{
			title: "Start Break",
			imageURL: require("/assets/break.png")
		},
		{
			title: "Short Pause",
			imageURL: require("/assets/pause.png")
		},
		{
			title: "Dispatcher",
			imageURL: require("/assets/break.png")
		},
		{
			title: "Daddy I am stuck",
			imageURL: require("/assets/message.png")
		},
	];

	const renderButton = ({ item }: {item: Props}) => (
		<Button title={item.title} imageURL={item.imageURL} shape="square" marginAroundButton={10} />
	  );

	return openModal ? (
		<View style={[t.w5_12, t.hFull, t.h100, t.flexCol, t.justifyBetween, styles.containerColor, t.itemsCenter]}>
			<View style={[t.wFull, t.flexRow, t.justifyBetween, t.itemsStart, t.p4]}>
				<TouchableHighlight onPress={() => setOpenModal(!openModal)}>
					<Image source={require("../../../assets/burger.png")} style={[t.w6, t.h5, t.mT2]} />
				</TouchableHighlight>
				<View style={[t.flexCol]}>
					<Text style={[t.textWhite,t.textSm ,styles.statusText]}>Status:</Text>
					<Text style={[t.textWhite, styles.statusReady]}>Ready</Text>
				</View>
				<Text style={[t.textWhite, t.h100, t.textBase]}>12:34</Text>
			</View>
			<View style={[t.wFull, t.flexCol, t.justifyBetween, t.itemsCenter, t.hAuto]}>
				<Image	
					source={require("../../../assets/logo.png")}
					style={{ width: 180, height: 180, resizeMode: "contain" }}
				/>
				<FlatList
       				data={buttons}
        			renderItem={renderButton}
        			keyExtractor={(item) => item.name}
        			numColumns={2}
        			contentContainerStyle={[t.wFull, { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }]}
      			/>
			</View>
			<Text style={[styles.helpAndSupportText, t.mB4]}>Help & Support</Text>
		</View>
	): <TouchableHighlight onPress={() => setOpenModal(!openModal)}>
		<Image source={require("../../../assets/burger.png")} style={[t.w6, t.h5, t.mT2]} />
	</TouchableHighlight>;
};

const styles = StyleSheet.create({
	containerColor: {
		backgroundColor: "#1C2129"
	},
	statusText: {
		color: "#FFF",
		textAlign: "center",
		fontFamily: "Poppins",
		fontStyles: "normal",
		fontWeight: "300",
		lineHeight: 24,
	},
	statusReady: {
		color: "#80F17E",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: 24,
		textDecorationLine: "underline",
	},
	helpAndSupportText: {
		color: "#FFF",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: 24,
		textDecorationLine: "underline",
	},
});

export default Navbar;
