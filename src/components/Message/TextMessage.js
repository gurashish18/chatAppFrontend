/** @format */

import React from "react";
import { Stack, Box, Typography, useTheme } from "@mui/material";
import MessageOptions from "./MessageOptions";

const TextMessage = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack
			direction={"row"}
			alignItems={"center"}
			justifyContent={el.incoming === true ? "start" : "end"}
		>
			<Box
				p={2}
				borderRadius={1.25}
				sx={{
					backgroundColor:
						el.incoming === true
							? theme.palette.background.default
							: theme.palette.primary.main,
				}}
			>
				<Typography
					color={el.incoming === true ? theme.palette.text : "#fff"}
					variant="subtitle1"
				>
					{el.message}
				</Typography>
			</Box>
			<MessageOptions />
		</Stack>
	);
};

export default TextMessage;
