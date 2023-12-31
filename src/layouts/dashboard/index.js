/** @format */

import { faker } from "@faker-js/faker";
import {
	IconButton,
	Stack,
	useTheme,
	Box,
	Divider,
	Avatar,
	Switch,
	Menu,
	MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Nav_Setting, Profile_Menu } from "../../data";
import { styled } from "@mui/material/styles";
import useSettings from "../../hooks/useSettings";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	"& .MuiSwitch-switchBase": {
		margin: 1,
		padding: 0,
		transform: "translateX(6px)",
		"&.Mui-checked": {
			color: "#fff",
			transform: "translateX(22px)",
			"& .MuiSwitch-thumb:before": {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
					"#fff"
				)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
			},
			"& + .MuiSwitch-track": {
				opacity: 1,
				backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
			},
		},
	},
	"& .MuiSwitch-thumb": {
		backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
		width: 32,
		height: 32,
		"&:before": {
			content: "''",
			position: "absolute",
			width: "100%",
			height: "100%",
			left: 0,
			top: 0,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
				"#fff"
			)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
		},
	},
	"& .MuiSwitch-track": {
		opacity: 1,
		backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
		borderRadius: 20 / 2,
	},
}));

const DashboardLayout = () => {
	const navigate = useNavigate();
	const theme = useTheme();
	const [selectedTab, setSelectedTab] = useState(0);
	const { onToggleMode } = useSettings();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const getPath = (index) => {
		switch (index) {
			case 0:
				return "/app";
			case 1:
				return "/group";
			case 2:
				return "/call";
			case 3:
				return "/settings";
			default:
				break;
		}
	};

	return (
		<div style={{ display: "flex" }}>
			<Box
				p={2}
				sx={{
					backgroundColor:
						theme.palette.mode === "light"
							? theme.palette.background.paper
							: theme.palette.background.default,
					width: 100,
					height: "100vh",
					boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
				}}
			>
				<Stack
					direction={"column"}
					sx={{ width: "100%", height: "100%" }}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Stack direction={"column"} spacing={2}>
						<Box
							sx={{
								backgroundColor: theme.palette.primary.main,
								height: 64,
								width: 64,
								borderRadius: 1.25,
							}}
						>
							<img src={logo} alt={"logo"} />
						</Box>
						<Stack direction={"column"} spacing={3} alignItems={"center"}>
							{Nav_Buttons.map((el) => {
								return el.index === selectedTab ? (
									<Box
										sx={{
											backgroundColor: theme.palette.primary.main,
											borderRadius: 1.5,
										}}
										p={1}
									>
										<IconButton
											onClick={() => {
												setSelectedTab(el.index);
												navigate(getPath(el.index));
											}}
											sx={{ width: "max-content", color: "#fff" }}
										>
											{el.icon}
										</IconButton>
									</Box>
								) : (
									<IconButton
										onClick={() => {
											setSelectedTab(el.index);
											navigate(getPath(el.index));
										}}
										sx={{
											width: "max-content",
											color: theme.palette.mode === "light" ? "#000" : "#fff",
										}}
									>
										{el.icon}
									</IconButton>
								);
							})}
							<Divider />
							{selectedTab === Nav_Setting[0].index ? (
								<Box
									sx={{
										backgroundColor: theme.palette.primary.main,
										borderRadius: 1.5,
									}}
									p={1}
								>
									<IconButton sx={{ color: "#fff" }}>
										{Nav_Setting[0].icon}
									</IconButton>
								</Box>
							) : (
								<IconButton
									sx={{
										color: theme.palette.mode === "light" ? "#000" : "#fff",
									}}
									onClick={() => {
										navigate(getPath(3));
										setSelectedTab(Nav_Setting[0].index);
									}}
								>
									{Nav_Setting[0].icon}
								</IconButton>
							)}
						</Stack>
					</Stack>
					<Stack direction={"column"} alignItems={"center"} spacing={2}>
						<MaterialUISwitch onChange={() => onToggleMode()} defaultChecked />
						<Avatar
							src={faker.image.avatar()}
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
							{Profile_Menu.map((profile) => (
								<MenuItem onClick={handleClose}>
									<Stack
										p={1}
										direction={"row"}
										gap={2}
										sx={{ width: 100 }}
										alignItems={"center"}
										justifyContent={"space-between"}
									>
										{profile.title}
										{profile.icon}
									</Stack>
								</MenuItem>
							))}
						</Menu>
					</Stack>
				</Stack>
			</Box>
			<Outlet />
		</div>
	);
};

export default DashboardLayout;
