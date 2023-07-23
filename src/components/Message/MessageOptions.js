/** @format */

import { DotsThreeVertical } from "phosphor-react";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Message_options } from "../../data";
import { Stack } from "@mui/material";

function MessageOptions() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<DotsThreeVertical
				size={20}
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			/>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{Message_options.map((option) => (
					<MenuItem onClick={handleClose}>{option.title}</MenuItem>
				))}
			</Menu>
		</>
	);
}

export default MessageOptions;
