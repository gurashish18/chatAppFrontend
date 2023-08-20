/** @format */

import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Stack,
} from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";

function NewPasswordForm() {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleClickShowConfirmPassword = () =>
		setShowConfirmPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<FormControl>
			<Stack gap={2} sx={{ marginTop: 2 }}>
				<FormControl variant="outlined">
					<InputLabel htmlFor="password">New Password</InputLabel>
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

				<FormControl variant="outlined">
					<InputLabel htmlFor="password">Confirm Password</InputLabel>
					<OutlinedInput
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						id="password"
						type={showConfirmPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="password visibility"
									onClick={handleClickShowConfirmPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{showConfirmPassword ? <Eye /> : <EyeSlash />}
								</IconButton>
							</InputAdornment>
						}
						label="Password"
					/>
				</FormControl>

				<PrimaryButton title={"CHANGE"} handleClick={() => {}} />
			</Stack>
		</FormControl>
	);
}

export default NewPasswordForm;
