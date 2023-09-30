import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { t } from "react-native-tailwindcss";
import Button, { Props } from "./Button";
import { useNavigation } from "@react-navigation/native";
import NewDriveModal from "./NewDriveModal";

const Navbar = () => {
	const navigation = useNavigation();

	const [openModal, setOpenModal] = useState(true);
	const [newOrderModal, setNewOrderModal] = useState(true);
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
				<FlatList
       				data={buttons}
        			renderItem={renderButton}
        			keyExtractor={(item) => item.title}
        			numColumns={2}
        			contentContainerStyle={[t.wFull, { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }]}
      			/>
			</View>
			{newOrderModal ? <NewDriveModal /> : <View style={[styles.logoContainer]}>
				<Image source={require("../../../assets/logo.png")} style={styles.logo}/>
			</View>}
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
	}
});

export default Navbar;
