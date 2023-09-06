/** @format */

import React from "react";
import { useTheme } from "@mui/material";

function SecondaryButton({ title, handleClick }) {
	const theme = useTheme();
	return (
		<button
			onClick={handleClick}
			style={{
				border: "1px solid #5B96F7",
				backgroundColor: (theme) =>
					theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
				color: "#5B96F7",
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

export default SecondaryButton;
