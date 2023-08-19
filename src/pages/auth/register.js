/** @format */

import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";

function register() {
	return (
		<>
			<Stack gap={2} mb={5} sx={{ position: "relative" }}>
				<Typography variant="h4">Get Started with Tawk</Typography>
				<Stack direction={"row"} gap={1}>
					<Typography variant="body2">Already have an account?</Typography>
					<Link to="/auth/login" component={RouterLink}>
						Login
					</Link>
				</Stack>
				<RegisterForm />
			</Stack>
		</>
	);
}

export default register;
