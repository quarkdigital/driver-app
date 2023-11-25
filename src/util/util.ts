import { Dimensions } from "react-native";

export function isMobile(): boolean {
	return Dimensions.get("window").width < 1000;
}