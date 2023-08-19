/** @format */

import React from "react";
import { useTheme } from "@mui/material";

function PrimaryButton({ title, handleClick }) {
	const theme = useTheme();
	return (
		<button
			onClick={handleClick}
			style={{
				border: "none",
				backgroundColor: theme.palette.primary.main,
				color: "#ffffff",
				padding: "15px 0px",
				borderRadius: "8px",
				cursor: "pointer",
				fontSize: "16px",
				fontWeight: "600",
			}}
		>
			{title}
		</button>
	);
}

export default PrimaryButton;
