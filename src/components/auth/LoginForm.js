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
	Link,
} from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import React, { useState } from "react";
import CompanyButton from "../buttons/CompanyButton";
import PrimaryButton from "../buttons/PrimaryButton";
import { Link as RouterLink } from "react-router-dom";

function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleSubmit = () => {
		console.log({ email, password });
	};

	return (
		<FormControl>
			<Stack gap={2}>
				<TextField
					value={email}
					id="email"
					label="Email"
					variant="outlined"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<FormControl variant="outlined">
					<InputLabel htmlFor="password">Password</InputLabel>
					<OutlinedInput
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
				<Stack alignSelf={"flex-end"}>
					<Link
						to="/auth/reset-password"
						component={RouterLink}
						color="inherit"
						variant="subtitle2"
					>
						Forgot password?
					</Link>
				</Stack>
				<PrimaryButton title={"LOGIN"} handleClick={handleSubmit} />
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

export default LoginForm;
