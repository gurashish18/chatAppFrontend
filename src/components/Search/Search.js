/** @format */

import React from "react";
import { Box, IconButton, Stack, TextField, useTheme } from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";

const Search = () => {
	const theme = useTheme();
	return (
		<Box px={1} py={0.2} sx={{ backgroundColor: "#EAF2FE", borderRadius: 2.5 }}>
			<Stack
				direction="row"
				alignItems={"center"}
				justifyContent={"space-between"}
				width={"100%"}
			>
				<IconButton>
					<MagnifyingGlass
						color={theme.palette.primary.main}
						fontSize={"20px"}
					/>
				</IconButton>
				<TextField
					variant="standard"
					margin="normal"
					type="text"
					placeholder="Search"
					fullWidth
					InputProps={{
						disableUnderline: true,
						style: {
							fontSize: "16px",
							color: theme.palette.primary.main,
						},
					}}
				/>
			</Stack>
		</Box>
	);
};

export default Search;
