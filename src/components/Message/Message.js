/** @format */

import React from "react";
import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import TimeLine from "./TimeLine";
import TextMessage from "./TextMessage";
import MediaMessage from "./MediaMessage";
import ReplyMessage from "./ReplyMessage";
import DocMessage from "./DocMessage";
import LinkMessage from "./LinkMessage";

const Message = () => {
	return (
		<Box p={3}>
			<Stack direction={"column"} spacing={2}>
				{Chat_History.map((el) => {
					switch (el.type) {
						case "divider":
							return <TimeLine el={el} />;
						case "msg":
							switch (el.subtype) {
								case "img":
									return <MediaMessage el={el} />;
								case "doc":
									return <DocMessage el={el} />;
								case "link":
									return <LinkMessage el={el} />;
								case "reply":
									return <ReplyMessage el={el} />;
								default:
									return <TextMessage el={el} />;
							}
						default:
							return <></>;
					}
				})}
			</Stack>
		</Box>
	);
};

export default Message;
