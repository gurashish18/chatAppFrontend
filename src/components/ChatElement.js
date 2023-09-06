/** @format */

import React from "react";
import {
	Box,
	useTheme,
	Stack,
	styled,
	Avatar,
	Badge,
	Typography,
} from "@mui/material";

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

const ChatElement = ({ chat }) => {
	const theme = useTheme();
	return (
		<Box
			p={2}
			borderRadius={1.5}
			sx={{
				backgroundColor:
					theme.palette.mode === "light"
						? theme.palette.background.paper
						: theme.palette.background.default,
				borderRadius: 2.5,
				width: "100%",
				cursor: "pointer",
			}}
		>
			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent={"space-between"}
				sx={{ height: "100%" }}
			>
				<Stack direction={"row"} alignItems={"center"} spacing={1}>
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

					<Stack spacing={0.3}>
						<Typography variant="subtitle2">{chat.name}</Typography>
						<Typography variant="caption">{chat.msg}</Typography>
					</Stack>
				</Stack>
				<Stack spacing={2} alignItems={"center"}>
					<Typography sx={{ fontWeight: 600 }} variant="caption">
						{chat.time}
					</Typography>
					<Badge
						className="unread-count"
						color="primary"
						badgeContent={chat.unread}
					/>
				</Stack>
			</Stack>
		</Box>
	);
};

export default ChatElement;
