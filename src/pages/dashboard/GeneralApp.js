/** @format */

import React from "react";
import Chats from "./Chats";
import Conversations from "./Conversations";
import { Stack } from "@mui/material";
import Profile from "../../components/Profile";

const GeneralApp = () => {
	return (
		<Stack direction={"row"}>
			<Chats />
			<Conversations />
			<Profile />
		</Stack>
	);
};

export default GeneralApp;
