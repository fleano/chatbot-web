import React from "react";
import { Box, Divider, Paper, styled } from "@mui/material";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatRoomInput from "./ChatRoomInput";
import ChatRoomMessages from "./ChatRoomMessages";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  borderRadius: "16px",
  height: "80%", // Ensure it fills the parent height
}));

const ChatRoom = ({ ...paperProps }) => {
  return (
    <StyledPaper {...paperProps}>
      <ChatRoomHeader />
      <Divider />
      <Box sx={{ 
        // flex: 1,
         overflow: "auto" }}>
        <ChatRoomMessages />
      </Box>
      <ChatRoomInput />
    </StyledPaper>
  );
};

export default ChatRoom;
