/** @format */

import {
	Box,
	Stack,
	TextField,
	styled,
	InputAdornment,
	IconButton,
	Fab,
	useTheme,
	Tooltip,
} from "@mui/material";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Actions } from "../../data";

const StyledInput = styled(TextField)(({ theme }) => ({
	"& .MuiInputBase-input": {
		paddingTop: "12px !important",
		paddingBottom: "12px !important",
	},
}));

function ChatInput({ setEmojiPicker }) {
	const [isActionsOpen, setIsActionsOpen] = useState(false);
	return (
		<StyledInput
			fullWidth
			placeholder="Write a message..."
			InputProps={{
				disableUnderline: true,
				startAdornment: (
					<Stack sx={{ width: "max-content" }}>
						<Stack
							sx={{
								position: "relative",
								display: isActionsOpen ? "inline-block" : "none",
							}}
						>
							{Actions.map((action) => (
								<Tooltip title={action.title} placement="right">
									<Fab
										sx={{
											position: "absolute",
											top: -action.y,
											backgroundColor: action.color,
										}}
										aria-label={action.title}
									>
										{action.icon}
									</Fab>
								</Tooltip>
							))}
						</Stack>
						<InputAdornment>
							<IconButton onClick={() => setIsActionsOpen(!isActionsOpen)}>
								<LinkSimple />
							</IconButton>
						</InputAdornment>
					</Stack>
				),
				endAdornment: (
					<InputAdornment>
						<IconButton onClick={() => setEmojiPicker((prev) => !prev)}>
							<Smiley />
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
}

function ChatFooter() {
	const theme = useTheme();
	const [openEmojiPicker, setEmojiPicker] = useState(false);
	return (
		<Box p={2} sx={{ width: "100%", boxShadow: "0px 0px 4px 0px #00000040" }}>
			<Stack direction={"row"} alignItems={"center"} spacing={2}>
				<Stack sx={{ width: "100%" }}>
					<Box
						sx={{
							display: openEmojiPicker ? "inline" : "none",
							zIndex: 99,
							position: "fixed",
							bottom: "85px",
							right: "100px",
						}}
					>
						<Picker
							theme={theme.palette.mode}
							data={data}
							onEmojiSelect={console.log}
						/>
					</Box>
					<ChatInput setEmojiPicker={setEmojiPicker} />
				</Stack>
				<Box
					height={"48px"}
					width={"48px"}
					borderRadius={1.5}
					sx={{
						backgroundColor: theme.palette.primary.main,
						cursor: "pointer",
					}}
				>
					<Stack
						sx={{ height: "100%", width: "100%" }}
						alignItems={"center"}
						justifyContent={"center"}
					>
						<PaperPlaneTilt
							fontSize={24}
							color={theme.palette.background.paper}
						/>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
}

export default ChatFooter;
