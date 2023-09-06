/** @format */

import { faker } from "@faker-js/faker";
import {
	FormControl,
	TextField,
	Stack,
	Typography,
	Avatar,
} from "@mui/material";
import React, { useState } from "react";
import SecondaryButton from "./buttons/SecondaryButton";

function ProfileForm() {
	const [name, setName] = useState("");
	const [about, setAbout] = useState("Hey there! I am using Twak.");
	return (
		<FormControl>
			<Stack gap={4}>
				<Stack alignItems={"center"} justifyContent={"center"}>
					<Avatar
						alt="user"
						src={faker.image.avatar()}
						sx={{ height: "150px", width: "150px" }}
					/>
				</Stack>
				<Stack gap={2}>
					<TextField
						value={name}
						id="name"
						label="Name"
						variant="outlined"
						onChange={(e) => setName(e.target.value)}
					/>
					<Typography variant="subtitle2" color={"#7C7C7D"}>
						This name is visible to your contacts
					</Typography>
				</Stack>
				<TextField
					id="about"
					label="About"
					variant="outlined"
					hintText={about}
					multiline
					rows={2}
					value={about}
					onChange={(e) => setAbout(e.target.value)}
				/>
				<Stack>
					<SecondaryButton title={"Save"} handleClick={() => {}} />
				</Stack>
			</Stack>
		</FormControl>
	);
}

export default ProfileForm;
