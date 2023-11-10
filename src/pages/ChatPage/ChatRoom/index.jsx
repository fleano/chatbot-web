import React from "react";
import { Box, Divider, Paper } from "@mui/material";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatRoomInput from "./ChatRoomInput";
import ChatRoomMessages from "./ChatRoomMessages";

const ChatRoom = ({ ...paperProps }) => {
  return (
    <Paper
      sx={{
        padding: 2,
        borderRadius: "16px",
      }}
    >
      <ChatRoomHeader />
      <Divider />
      <ChatRoomMessages sx={{ height: "70vh" }} />
      <ChatRoomInput />
    </Paper>
  );
};

export default ChatRoom;
