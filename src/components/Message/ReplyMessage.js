/** @format */

import { Stack, useTheme, Box, Typography } from "@mui/material";
import React from "react";

const ReplyMessage = ({ el }) => {
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
				<Stack direction={"column"} spacing={1} justifyContent={"center"}>
					<Typography
						color={el.incoming === true ? theme.palette.text : "#fff"}
						variant="subtitle1"
					>
						{el.message}
					</Typography>
					<Box
						p={1}
						borderRadius={1}
						sx={{
							backgroundColor: theme.palette.background.default,
						}}
					>
						<Typography variant="subtitle1">{el.reply}</Typography>
					</Box>
				</Stack>
			</Box>
		</Stack>
	);
};

export default ReplyMessage;
