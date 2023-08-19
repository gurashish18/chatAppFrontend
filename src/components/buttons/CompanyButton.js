/** @format */

import React from "react";
import { Box, Typography, Stack } from "@mui/material";

function CompanyButton({ logo, title }) {
	return (
		<Box
			width={"100%"}
			sx={{ border: "1px solid black", cursor: "pointer", borderRadius: "8px" }}
		>
			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent={"center"}
				gap={2}
				sx={{ padding: "10px 15px" }}
			>
				<img width="25" height="25" src={logo} alt="logo" />
				<Typography sx={{ fontSize: "16px" }}>{title}</Typography>
			</Stack>
		</Box>
	);
}

export default CompanyButton;
