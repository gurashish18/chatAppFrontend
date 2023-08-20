/** @format */

import { TextField, FormControl, Stack } from "@mui/material";
import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";

function ResetPasswordForm() {
	const [email, setEmail] = useState("");
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

				<PrimaryButton title={"SEND REQUEST"} handleClick={() => {}} />
			</Stack>
		</FormControl>
	);
}

export default ResetPasswordForm;
