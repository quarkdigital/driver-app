import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import Navbar from "./Navbar";
import { t } from "react-native-tailwindcss";
import NewDriveModal from "./NewDriveModal";

function DriverApp() {
	const [mobile, setMobile] = useState(false);
	const isMobile = () => {
		const dim = Dimensions.get("screen");
		return dim.width >= dim.height;
	};

	useEffect(() => {
	  setMobile(isMobile());
	  console.log(mobile);
	  	  
	}, []);

	return (
		<View style={[t.wFull, t.hFull, t.flexRow]}>
			<Navbar mobile={mobile} acceptedRide={true}/>
			<NewDriveModal mobile={mobile} />
		</View>
	);
}

export default DriverApp;
