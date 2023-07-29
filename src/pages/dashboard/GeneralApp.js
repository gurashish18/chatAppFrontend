/** @format */

import React from "react";
import Chats from "./Chats";
import Conversations from "./Conversations";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import Contact from "../../components/Contact";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const GeneralApp = () => {
	const { sidebar } = useSelector((store) => store.app);
	return (
		<Stack direction={"row"}>
			<Chats />
			<Conversations />
			{sidebar.open &&
				(() => {
					switch (sidebar.type) {
						case "CONTACT":
							return <Contact />;

						case "STARRED":
							return <StarredMessages />;

						case "SHARED":
							return <SharedMessages />;

						default:
							break;
					}
				})()}
		</Stack>
	);
};

export default GeneralApp;
