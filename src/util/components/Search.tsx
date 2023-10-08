import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { t } from "react-native-tailwindcss";

const Search = () => {
	const [windowWidth, setWindowWidth] = useState<number>(0);
	const addresses = [
		{
			name: "Rozino",
			city: "Budva"
		},
		{
			name: "Rozino III",
			city: "Budva"
		},
		{
			name: "Jadranski put 26",
			city: "Budva"
		},
		{
			name: "Jadranski put bb",
			city: "Budva"
		},
	];

	// TODO: Check what to do when screens are bigger/smaller
	// useEffect(() => {
	// 	const windowWidth = Dimensions.get("window");
	// 	setWindowWidth(windowWidth.width);
	// }, []);
	

	const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	return (
		<View style={[t.flexRow, t.wFull, t.hFull, {backgroundColor: "#1C2129"}]}>
			<View style={[t.flexCol, t.justifyStart, t.itemsCenter, t.hFull, {backgroundColor: "#242A34", width: 270}]}>
				<TextInput placeholder="Ukucaj Lokaciju" style={[t.roundedTLg, t.roundedRLg, t.roundedBLg, t.mT5, t.p3, {width: 240, backgroundColor: "#343C4B", color: "#FFFFFF"}]} />
				<View style={[t.flexCol, t.justifyStart, t.mT8, t.wFull]}>
					{addresses.map((item) => (
						<Text key={item.name} style={[styles.textBorder, greyText, t.pS6, {paddingVertical: 10}]}>{item.name + item.city}</Text>
					))}
				</View>
			</View>
			<View style={[t.hFull, t.wFull, t.flexCol]}>
				<View style={[t.justifyCenter, t.itemsEnd]}>
					<View style={[t.flexRow, t.itemsCenter, t.justifyCenter]}>
						<Text style={whiteText}>Select End Location</Text>
						<Image source={require("../../assets/cross.png")} style={{width: 70, height: 70}} />
				   </View>
				</View>
				<FlatList
					data={letters}
					renderItem={({ item }) => (
						<TouchableOpacity style={styles.letterContainer}>
							<Text style={[whiteText, {fontSize: 50}]}>{item}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
					numColumns={6} 
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	textBorder: {
		borderBottomColor: "rgba(255, 255, 255, 0.05)",
		borderBottomWidth: 1,
		borderTopColor: "rgba(255, 255, 255, 0.05)",
		borderTopWidth: 1
	},
	letterContainer: {
		borderWidth: 2,
		borderColor: "#FFFFFF",
		borderRadius: 16,
		width: 80,
		height: 80,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: 10
	}
});

export default Search;