import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = props => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={47} height={48} fill="none" {...props}>
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="M28.246 16.936v14.463m-9.642-14.463v14.463m4.821 14.463c-11.982 0-21.695-9.713-21.695-21.695 0-11.981 9.713-21.694 21.695-21.694 11.982 0 21.695 9.713 21.695 21.694 0 11.982-9.713 21.695-21.695 21.695Z"
		/>
	</Svg>
);
export default SvgComponent;
