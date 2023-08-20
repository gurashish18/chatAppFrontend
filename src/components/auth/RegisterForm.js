/** @format */

import {
	FormControl,
	TextField,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Typography,
	Stack,
} from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import React, { useState } from "react";
import CompanyButton from "../buttons/CompanyButton";
import PrimaryButton from "../buttons/PrimaryButton";

function RegisterForm() {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<FormControl>
			<Stack gap={2}>
				<Stack direction={"row"} gap={1}>
					<TextField
						fullWidth
						id="firstname"
						label="First Name"
						variant="outlined"
					/>
					<TextField
						fullWidth
						id="lastname"
						label="Last Name"
						variant="outlined"
					/>
				</Stack>
				<TextField id="email" label="Email" variant="outlined" />
				<FormControl variant="outlined">
					<InputLabel htmlFor="password">Password</InputLabel>
					<OutlinedInput
						id="password"
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{showPassword ? <Eye /> : <EyeSlash />}
								</IconButton>
							</InputAdornment>
						}
						label="Password"
					/>
				</FormControl>
				<PrimaryButton title={"REGISTER"} />
				<Stack direction={"row"} alignItems={"center"} gap={1}>
					<svg height="1">
						<line
							x1="0"
							y1="0"
							x2="100%"
							y2="0"
							stroke="black"
							strokeWidth="1"
						/>
					</svg>
					<Typography>OR</Typography>
					<svg height="1">
						<line
							x1="0"
							y1="0"
							x2="100%"
							y2="0"
							stroke="black"
							strokeWidth="1"
						/>
					</svg>
				</Stack>
				<CompanyButton
					title="Continue with Google"
					logo="https://img.icons8.com/color/48/google-logo.png"
				/>
			</Stack>
		</FormControl>
	);
}

export default RegisterForm;
