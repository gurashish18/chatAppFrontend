/** @format */

import React from "react";
import { Divider, Stack, Typography } from "@mui/material";

const TimeLine = ({ el }) => {
	return (
		<Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
			<Divider width={"45%"} />
			<Typography variant="caption">{el.text}</Typography>
			<Divider width={"45%"} />
		</Stack>
	);
};

export default TimeLine;
