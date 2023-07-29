/** @format */

import React from "react";
import {
	Box,
	IconButton,
	Stack,
	Typography,
	useTheme,
	Divider,
	Avatar,
	Button,
} from "@mui/material";
import {
	XCircle,
	Phone,
	VideoCamera,
	CaretRight,
	Star,
	Bell,
	Prohibit,
	Trash,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../redux/slices/app";
import { UpdateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";

function Contact() {
	const theme = useTheme();
	const dispatch = useDispatch();
	return (
		<Box
			sx={{
				width: 320,
				maxHeight: "100vh",
				height: "100%",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<Stack
				direction={"column"}
				sx={{
					height: "100%",
					flexGrow: 1,
					overflow: "scroll",
				}}
			>
				<Box
					sx={{
						width: "100%",
						boxShadow: "0px 0px 4px 0px #00000040",
						backgroundColor:
							theme.palette.mode === "light"
								? "F8FAFF"
								: theme.palette.background,
					}}
					p={2}
				>
					<Stack direction={"row"} alignItems="center" spacing={3}>
						<IconButton
							onClick={() => {
								dispatch(ToggleSidebar());
							}}
						>
							<XCircle />
						</IconButton>
						<Typography variant="subtitle1">Contact Info</Typography>
					</Stack>
				</Box>
				<Stack
					sx={{
						height: "100%",
						flexGrow: 1,
						overflow: "scroll",
					}}
					p={3}
					spacing={3}
				>
					<Stack alignItems="center" direction="row" spacing={2}>
						<Avatar
							src={faker.image.avatar()}
							alt={"user"}
							sx={{ height: 64, width: 64 }}
						/>
						<Stack spacing={0.5}>
							<Typography variant="article" fontWeight={600}>
								{faker.name.fullName()}
							</Typography>
							<Typography variant="body2" fontWeight={500}>
								{"+91 62543 28 739"}
							</Typography>
						</Stack>
					</Stack>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent={"space-evenly"}
					>
						<Stack alignItems={"center"} spacing={1}>
							<IconButton>
								<Phone />
							</IconButton>

							<Typography variant="overline">Voice</Typography>
						</Stack>
						<Stack alignItems={"center"} spacing={1}>
							<IconButton>
								<VideoCamera />
							</IconButton>
							<Typography variant="overline">Video</Typography>
						</Stack>
					</Stack>
					<Divider />
					<Stack spacing={0.5}>
						<Typography variant="article" fontWeight={600}>
							About
						</Typography>
						<Typography variant="body2" fontWeight={500}>
							Hey there! I am using Whatsapp
						</Typography>
					</Stack>
					<Divider />
					<Stack
						direction="row"
						alignItems="center"
						justifyContent={"space-between"}
					>
						<Typography variant="subtitle2">Media, Links & Docs</Typography>
						<Button
							onClick={() => {
								dispatch(UpdateSidebarType("SHARED"));
							}}
							endIcon={<CaretRight />}
						>
							401
						</Button>
					</Stack>
					<Stack direction={"row"} alignItems="center" spacing={2}>
						{[1, 2, 3].map((el) => (
							<Box>
								<img src={faker.image.city()} alt={faker.internet.userName()} />
							</Box>
						))}
					</Stack>
					<Divider />
					<Stack
						direction="row"
						alignItems="center"
						justifyContent={"space-between"}
					>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Star size={21} />
							<Typography variant="subtitle2">Starred Messages</Typography>
						</Stack>

						<IconButton
							onClick={() => {
								dispatch(UpdateSidebarType("STARRED"));
							}}
						>
							<CaretRight />
						</IconButton>
					</Stack>
					<Divider />
					<Stack
						direction="row"
						alignItems="center"
						justifyContent={"space-between"}
					>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Bell size={21} />
							<Typography variant="subtitle2">Mute Notifications</Typography>
						</Stack>

						{/* <AntSwitch /> */}
					</Stack>
					<Divider />
					<Typography variant="body2">1 group in common</Typography>
					<Stack direction="row" alignItems={"center"} spacing={2}>
						<Avatar src={faker.image.imageUrl()} alt={faker.name.fullName()} />
						<Stack direction="column" spacing={0.5}>
							<Typography variant="subtitle2">Camel’s Gang</Typography>
							<Typography variant="caption">
								Owl, Parrot, Rabbit , You
							</Typography>
						</Stack>
					</Stack>
					<Divider />
					<Stack direction="row" alignItems={"center"} spacing={2}>
						<Button
							// onClick={() => {
							// 	setOpenBlock(true);
							// }}
							fullWidth
							startIcon={<Prohibit />}
							variant="outlined"
						>
							Block
						</Button>
						<Button
							// onClick={() => {
							// 	setOpenDelete(true);
							// }}
							fullWidth
							startIcon={<Trash />}
							variant="outlined"
						>
							Delete
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
}

export default Contact;
