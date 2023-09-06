/** @format */

import {
	Box,
	Stack,
	Avatar,
	styled,
	Badge,
	Typography,
	IconButton,
	Divider,
} from "@mui/material";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../../redux/slices/app";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}));

const ChatHeader = ({ chat }) => {
	const dispatch = useDispatch();
	return (
		<Box height={"80px"} sx={{ boxShadow: "0px 0px 4px 0px #00000040" }} p={2}>
			<Stack
				sx={{ height: "100%" }}
				direction={"row"}
				alignItems="center"
				justifyContent="space-between"
			>
				<Stack
					direction={"row"}
					spacing={2}
					onClick={() => dispatch(ToggleSidebar())}
				>
					{chat.online ? (
						<StyledBadge
							overlap="circular"
							anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
							variant="dot"
						>
							<Avatar src={chat.img} alt="chat-avatar" />
						</StyledBadge>
					) : (
						<Avatar src={chat.img} alt="chat-avatar" />
					)}
					<Stack direction={"column"}>
						<Typography variant="subtitle2">{chat.name}</Typography>
						{chat.online ? (
							<Typography variant="caption">Online</Typography>
						) : (
							<Typography variant="caption">Offline</Typography>
						)}
					</Stack>
				</Stack>
				<Stack direction={"row"} spacing={3}>
					<IconButton>
						<VideoCamera />
					</IconButton>
					<IconButton>
						<Phone />
					</IconButton>
					<IconButton>
						<MagnifyingGlass />
					</IconButton>
					<Divider orientation="vertical" flexItem />
					<IconButton>
						<CaretDown />
					</IconButton>
				</Stack>
			</Stack>
		</Box>
	);
};

export default ChatHeader;
