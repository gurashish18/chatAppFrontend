/** @format */

import { Stack, Typography, Link } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import NewPasswordForm from "../../components/auth/NewPasswordForm";

function newPassword() {
	return (
		<>
			<Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
				<Typography variant="h3">Reset your Password</Typography>
				<Typography sx={{ color: "text.secondary" }}>
					Please enter your new password. Both passwords must match.
				</Typography>
				<NewPasswordForm />
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

export default newPassword;
