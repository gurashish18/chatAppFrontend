/** @format */

import {
	Box,
	Divider,
	Hidden,
	IconButton,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { CircleDashed } from "phosphor-react";
import React from "react";
import ChatElement from "../../components/ChatElement";
import { SimpleBarStyle } from "../../components/Scrollbar";
import Search from "../../components/Search/Search";
import { ChatList } from "../../data";

const Chats = () => {
	const theme = useTheme();
	const pinnedChats = ChatList.filter((obj) => obj.pinned === true);
	const chats = ChatList.filter((obj) => obj.pinned === false);
	return (
		<Box
			p={2}
			sx={{
				height: "100%",
				maxHeight: "100vh",
				overflow: "hidden",
				position: "relative",
				width: 320,
				boxShadow: "0px 0px 4px 0px #00000040",
				backgroundColor:
					theme.palette.mode === "light"
						? "#F8FAFF"
						: theme.palette.background.paper,
			}}
		>
			<Stack direction={"column"} spacing={2} height={"100vh"}>
				<Stack
					direction={"row"}
					sx={{ width: "100%" }}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Typography variant="h5">Chats</Typography>
					<IconButton>
						<CircleDashed />
					</IconButton>
				</Stack>
				<Stack direction={"column"} spacing={1}>
					<Search />
					<Divider />
				</Stack>
				<Stack
					direction={"column"}
					spacing={2}
					sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
				>
					<SimpleBarStyle>
						<Stack direction={"column"} spacing={1}>
							{/* Pinned */}
							<Typography variant="subtitle2">Pinned</Typography>
							<Stack direction={"column"} spacing={1}>
								{pinnedChats.map((chat) => (
									<ChatElement chat={chat} />
								))}
							</Stack>
						</Stack>
						<Stack direction={"column"} spacing={1}>
							{/* All chats */}
							<Typography variant="subtitle2">All Chats</Typography>
							<Stack direction={"column"} spacing={1}>
								{chats.map((chat) => (
									<ChatElement chat={chat} />
								))}
							</Stack>
						</Stack>
					</SimpleBarStyle>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Chats;
