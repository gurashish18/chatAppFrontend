/** @format */

import { Box, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ChatFooter from "../../components/Conversations/ChatFooter";
import ChatHeader from "../../components/Conversations/ChatHeader";
import Message from "../../components/Message/Message";
import { ChatList } from "../../data";

function Conversations() {
	const { sidebar } = useSelector((store) => store.app);
	const theme = useTheme();
	const chat = ChatList[3];
	return (
		<Box
			height={"100%"}
			maxHeight={"100vh"}
			width={sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)"}
			sx={{ display: "flex", flexDirection: "column" }}
		>
			{/* Chat header */}
			<ChatHeader chat={chat} />
			{/* Chats */}
			<Box
				width={"100%"}
				sx={{
					flexGrow: 1,
					overflow: "scroll",
					backgroundColor:
						theme.palette.mode === "light"
							? "#F0F4FA"
							: theme.palette.background.paper,
				}}
			>
				<Message menu={true} />
			</Box>
			{/* Chat footer */}
			<ChatFooter />
		</Box>
	);
}

export default Conversations;
