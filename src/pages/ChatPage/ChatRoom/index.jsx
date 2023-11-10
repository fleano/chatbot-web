import React from "react";
import { Box, Divider, Paper } from "@mui/material";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatRoomInput from "./ChatRoomInput";
import ChatRoomMessages from "./ChatRoomMessages";

const ChatRoom = ({ children, ...boxProps }) => {
  return (
    <Box {...boxProps}>
      <Paper
        sx={{
          padding: 2,
          borderRadius: "16px",
          margin: 3,
        }}
      >
        <ChatRoomHeader />
        <Divider flexItem />
        <ChatRoomMessages />
        <ChatRoomInput />
      </Paper>
    </Box>
  );
};

export default ChatRoom;
