import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";
import Avatar from "../util/components/Avatar";
import { reusableStyles } from "../util/Styles";
const RideHistory = () => {
	const data = [
		{ id: "1", name: "Item 1", price: "$10" },
		{ id: "2", name: "Item 2", price: "$15" },
		// Add more data items here
	  ];

	  const navbarTitles = [{
		name: "Price"
	  },
	  { name: "Distance"},
	  {name: "Duration"},
	  {name: "Time", style: {textAlign: "right"}}
	];


	return (
		<View style={[t.wFull, t.hFull, {backgroundColor: "#1C2129"}]}>
			<View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.wFull, t.z10]}>
				<Image source={require("../../assets/logo.png")} style={styles.image} />
				<Text style={[reusableStyles.bigText]}>Driving History</Text>
				<View style={[t.relative, t.hFull, t.pR5, {width: 150}]}>
					<Avatar />
				</View>
			</View>
			<View style={[t.itemsCenter, t.pT10]}>
				<FlatList
					ListHeaderComponent={() => (
						<View style={styles.header}>
							<Text style={reusableStyles.smallWhiteText}>
						Relation
							</Text>
							<View style={[t.flexRow, t.itemsCenter, t.justifyBetween,{width: 400, paddingVertical: 5}]}>
								{navbarTitles.map((item) => (
									<Text key={item.name} style={[t.w32, reusableStyles.smallWhiteText, item.style]}>{item.name}</Text>
								))}
							</View>
						</View>
					)}
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<View style={[styles.row, {paddingVertical: 20}]}>
							<View style={[t.flexRow, t.itemsCenter, t.justifyBetween, {width: 290}]}>
								<Text style={reusableStyles.smallWhiteText}>Jadranski Put 24</Text>
								<Image source={require("../../assets/arrow.png")} style={styles.arrowImage} />
								<Text style={reusableStyles.smallWhiteText}>Mainski put 21</Text>
							</View>	
							<View style={[t.flexRow, t.itemsCenter, t.justifyBetween, {width: 400}]}>
								<Text style={[t.w32, reusableStyles.smallWhiteText]}>3.55€</Text>
								<Text style={[t.w32, reusableStyles.smallWhiteText]}>4.6km</Text>
								<Text style={[t.w32, reusableStyles.smallWhiteText]}>18min</Text>
								<Text style={[t.w32, reusableStyles.smallWhiteText, {textAlign: "right"}]}>14:56 - 13:14</Text>
							</View>
						</View>
					)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 150,
		height: 50,
		margin: 20
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	  },
	cell: {
		flex: 1,
		textAlign: "center",
	  },
	  header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: "#242933",
		borderRadius: 16,
		width: 760
	  },
	  headerText: {
		flex: 1,
		fontWeight: "bold",
		textAlign: "center",
	  },
	  arrowImage: {
		width: 50,
		height: 10,
		marginLeft: 5
	  }
});

export default RideHistory;