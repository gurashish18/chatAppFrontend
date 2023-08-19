/** @format */

import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

function login() {
	return (
		<>
			<Stack gap={2} mb={5} sx={{ position: "relative" }}>
				<Typography variant="h4">Login to Tawk</Typography>
				<Stack direction={"row"} gap={1}>
					<Typography variant="body2">New User?</Typography>
					<Link to="/auth/register" component={RouterLink}>
						Create an account
					</Link>
				</Stack>
				<LoginForm />
			</Stack>
		</>
	);
}

export default login;
