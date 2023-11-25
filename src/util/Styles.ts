import { StyleSheet } from "react-native";

export const Colors = {
	darkBlue: "#1C2129",
	white: "#FFFFFF",
	almostWhite: "#F5F5F5",
	lightGreen: "#80F17E",
};

const textBase = {
	// fontFamily: "Poppins",
	color: Colors.white,
	fontSize: 16,
};

export const GS = StyleSheet.create({
	///////////////////////// FONTS /////////////////////////////
	fw600: {
		fontFamily: "Poppins-SemiBold",
		lineHeight: 27,
	},
	fw500: {
		fontFamily: "Poppins-Medium",
		lineHeight: 27,
	},
	fw700: {
		fontFamily: "Poppins-Bold",
		lineHeight: 24,
	},
	fs20: {
		fontSize: 20,
	},
	fs18: {
		fontSize: 18,
	},
	fs16: {
		fontSize: 16,
	},

	text: textBase,
	textBold: { fontWeight: "800" },
	H1: {
		...textBase,
		fontWeight: "bold",
		fontSize: 36,
	},
	H2: {
		...textBase,
		fontWeight: "bold",
		fontSize: 32,
	},
	H3: {
		...textBase,
		fontWeight: "bold",
		fontSize: 26,
	},
	///////////////////////// FONT AND BACKGROUND COLOR /////////////////////////////

	textWhite: {
		color: "white",
	},
	textGray: {
		color: "white",
		opacity: 0.3,
	},
	textPrimary: {
		color: "#1C2129",
	},
	textSecondary: {
		color: "#80F17E",
	},
	white: {
		backgroundColor: "white",
	},
	primary: {
		backgroundColor: "#1C2129",
	},
	secondary: {
		backgroundColor: "#80F17E",
	},
	primaryLight: {
		backgroundColor: "rgba(28, 33, 41, 0.9)",
	},

	/////////////////// FLEX BOX ///////////////////////////
	flex1: {
		flex: 1,
	},
	flex05: {
		flex: 0.5,
	},
	flexRow: {
		display: "flex",
		flexDirection: "row",
	},
	flexCol: {
		display: "flex",
		flexDirection: "column",
	},
	jusCenter: {
		justifyContent: "center",
	},
	jusBetween: {
		justifyContent: "space-between",
	},
	jusStart: {
		justifyContent: "flex-start",
	},
	jusEnd: {
		justifyContent: "flex-end",
	},
	jusAround: {
		justifyContent: "space-around",
	},
	jusEvenly: {
		justifyContent: "space-evenly",
	},
	alignICenter: {
		alignItems: "center",
	},
	alignIBaseline: {
		alignItems: "baseline",
	},
	alignIEnd: {
		alignItems: "flex-end",
	},
	alignIStart: {
		alignItems: "flex-start",
	},
	alignIStretch: {
		alignItems: "stretch",
	},
	alignSAuto: {
		alignSelf: "auto",
	},
	alignSBaseline: {
		alignSelf: "baseline",
	},
	alignSCenter: {
		alignSelf: "center",
	},
	alignSEnd: {
		alignSelf: "flex-end",
	},
	alignSStart: {
		alignSelf: "flex-start",
	},
	alignSStretch: {
		alignSelf: "stretch",
	},
	gap1: {
		gap: 5,
	},
	gap2: {
		gap: 10,
	},
	gap3: {
		gap: 15,
	},
	gap4: {
		gap: 20,
	},
	gap5: {
		gap: 25,
	},
	gap6: {
		gap: 30,
	},
	//////////////////////////////// MARGIN ////////////////////////////
	m0: {
		margin: 0,
	},
	mt0: {
		marginTop: 0,
	},
	mb0: {
		marginBottom: 0,
	},
	ml0: {
		marginLeft: 0,
	},
	mr0: {
		marginRight: 0,
	},
	mx0: {
		marginHorizontal: 0,
	},
	my0: {
		marginVertical: 0,
	},
	m1: {
		margin: 5,
	},
	mt1: {
		marginTop: 5,
	},
	mb1: {
		marginBottom: 5,
	},
	ml1: {
		marginLeft: 5,
	},
	mr1: {
		marginRight: 5,
	},
	mx1: {
		marginHorizontal: 5,
	},
	my1: {
		marginVertical: 5,
	},
	m2: {
		margin: 10,
	},
	mt2: {
		marginTop: 10,
	},
	mb2: {
		marginBottom: 10,
	},
	ml2: {
		marginLeft: 10,
	},
	mr2: {
		marginRight: 10,
	},
	mx2: {
		marginHorizontal: 10,
	},
	my2: {
		marginVertical: 10,
	},
	m3: {
		margin: 15,
	},
	mt3: {
		marginTop: 15,
	},
	mb3: {
		marginBottom: 15,
	},
	ml3: {
		marginLeft: 15,
	},
	mr3: {
		marginRight: 15,
	},
	mx3: {
		marginHorizontal: 15,
	},
	my3: {
		marginVertical: 15,
	},
	m4: {
		margin: 20,
	},
	mt4: {
		marginTop: 20,
	},
	mb4: {
		marginBottom: 20,
	},
	ml4: {
		marginLeft: 20,
	},
	mr4: {
		marginRight: 20,
	},
	mx4: {
		marginHorizontal: 20,
	},
	my4: {
		marginVertical: 20,
	},
	m5: {
		margin: 25,
	},
	mt5: {
		marginTop: 25,
	},
	mb5: {
		marginBottom: 25,
	},
	ml5: {
		marginLeft: 25,
	},
	mr5: {
		marginRight: 25,
	},
	mx5: {
		marginHorizontal: 25,
	},
	my5: {
		marginVertical: 25,
	},
	m6: {
		margin: 30,
	},
	mt6: {
		marginTop: 30,
	},
	mb6: {
		marginBottom: 30,
	},
	ml6: {
		marginLeft: 30,
	},
	mr6: {
		marginRight: 30,
	},
	mx6: {
		marginHorizontal: 30,
	},
	my6: {
		marginVertical: 30,
	},
	//////////////////////////////// PADDING ////////////////////////////
	p0: {
		padding: 0,
	},
	pt0: {
		paddingTop: 0,
	},
	pb0: {
		paddingBottom: 0,
	},
	pl0: {
		paddingLeft: 0,
	},
	pr0: {
		paddingRight: 0,
	},
	px0: {
		paddingHorizontal: 0,
	},
	py0: {
		paddingVertical: 0,
	},
	p1: {
		padding: 5,
	},
	pt1: {
		paddingTop: 5,
	},
	pb1: {
		paddingBottom: 5,
	},
	pl1: {
		paddingLeft: 5,
	},
	pr1: {
		paddingRight: 5,
	},
	px1: {
		paddingHorizontal: 5,
	},
	py1: {
		paddingVertical: 5,
	},
	p2: {
		padding: 10,
	},
	pt2: {
		paddingTop: 10,
	},
	pb2: {
		paddingBottom: 10,
	},
	pl2: {
		paddingLeft: 10,
	},
	pr2: {
		paddingRight: 10,
	},
	px2: {
		paddingHorizontal: 10,
	},
	py2: {
		paddingVertical: 10,
	},
	p3: {
		padding: 15,
	},
	pt3: {
		paddingTop: 15,
	},
	pb3: {
		paddingBottom: 15,
	},
	pl3: {
		paddingLeft: 15,
	},
	pr3: {
		paddingRight: 15,
	},
	px3: {
		paddingHorizontal: 15,
	},
	py3: {
		paddingVertical: 15,
	},
	p4: {
		padding: 20,
	},
	pt4: {
		paddingTop: 20,
	},
	pb4: {
		paddingBottom: 20,
	},
	pl4: {
		paddingLeft: 20,
	},
	pr4: {
		paddingRight: 20,
	},
	px4: {
		paddingHorizontal: 20,
	},
	py4: {
		paddingVertical: 20,
	},
	p5: {
		padding: 25,
	},
	pt5: {
		paddingTop: 25,
	},
	pb5: {
		paddingBottom: 25,
	},
	pl5: {
		paddingLeft: 25,
	},
	pr5: {
		paddingRight: 25,
	},
	px5: {
		paddingHorizontal: 25,
	},
	py5: {
		paddingVertical: 25,
	},
	p6: {
		padding: 30,
	},
	pt6: {
		paddingTop: 30,
	},
	pb6: {
		paddingBottom: 30,
	},
	pl6: {
		paddingLeft: 30,
	},
	pr6: {
		paddingRight: 30,
	},
	px6: {
		paddingHorizontal: 30,
	},
	py6: {
		paddingVertical: 30,
	},
});
