/** @format */

import React from "react";
import { Stack, Box, Typography, useTheme } from "@mui/material";
import MessageOptions from "./MessageOptions";

const MediaMessage = ({ el, menu }) => {
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
				<Stack
					direction={"column"}
					alignItems={"start"}
					justifyContent={"center"}
				>
					<img
						src={el.img}
						alt={el.message}
						style={{ width: "320px", height: "260px" }}
					/>
					<Typography variant="body2">{el.message}</Typography>
				</Stack>
			</Box>
			{menu && <MessageOptions />}
		</Stack>
	);
};

export default MediaMessage;
