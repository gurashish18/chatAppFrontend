/** @format */

import { Stack, Box, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import ProfileForm from "../../components/ProfileForm";

function Profile() {
	return (
		<>
			<Stack direction="row" sx={{ width: "100%" }}>
				<Box
					sx={{
						overflowY: "scroll",

						height: "100vh",
						width: 320,
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? "#F8FAFF"
								: theme.palette.background,

						boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
					}}
				>
					<Stack p={3} spacing={10}>
						<Stack
							spacing={2}
							direction={"row"}
							alignItems={"center"}
							sx={{ cursor: "pointer" }}
						>
							<CaretLeft size={24} color="#4B4B4B" />
							<Typography variant="h4">Profile</Typography>
						</Stack>
						<ProfileForm />
					</Stack>
				</Box>
			</Stack>
		</>
	);
}

export default Profile;
