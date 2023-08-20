/** @format */

import { Stack, Typography, Link } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm";

function resetPassword() {
	return (
		<>
			<Stack gap={2} sx={{ mb: 5, position: "relative" }}>
				<Typography variant="h3">Forgot your Password?</Typography>
				<Typography sx={{ color: "text.secondary" }}>
					Please enter the email linked to your account and we will send and
					email to reset your password
				</Typography>
				<ResetPasswordForm />
				<Link
					component={RouterLink}
					to={"/auth/login"}
					color="inherit"
					variant="subtitle2"
					sx={{
						mt: 3,
						mx: "auto",
						alignItems: "center",
						display: "inline-flex",
					}}
				>
					<CaretLeft size={24} />
					Return to sign in
				</Link>
			</Stack>
		</>
	);
}

export default resetPassword;
