import { io } from "socket.io-client";

const location = { lat: 42.29263, lng: 18.848562 };

// TODO: make dynamic for production
export const socket = io("http://172.25.128.1:3001/654b6848f9813fe8af2cd780", {
	// auth: { token: "6596f464e0a56bdfd9f434ee" },
	query: {
		role: "driver",
		...location,
	},
});
