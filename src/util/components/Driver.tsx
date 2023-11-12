import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import Navbar from "./Navbar";
import { t } from "react-native-tailwindcss";
import NewDriveModal from "./NewDriveModal";


// TODO: Change name DriverApp into something else
function DriverApp() {
	
	return (
		<View style={[t.wFull, t.hFull, t.flexRow]}>
			<Navbar acceptedRide={false} />
			<NewDriveModal mobile={true} />
		</View>
	);
}

export default DriverApp;
