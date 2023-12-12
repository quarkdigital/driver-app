import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = props => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={21} height={37} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="m1.73 26.863 16.874-16.536-8.437-8.268V35.13l8.437-8.268L1.73 10.327"
		/>
	</Svg>
);
export default SvgComponent;
