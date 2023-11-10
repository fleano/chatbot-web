import React from "react";
import { Box, Divider, Paper, styled } from "@mui/material";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatRoomInput from "./ChatRoomInput";
import ChatRoomMessages from "./ChatRoomMessages";

const StyledPaper = styled(Paper)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  borderRadius: "16px",
}));

const ChatRoom = ({ ...paperProps }) => {
  return (
    <StyledPaper {...paperProps}>
      <ChatRoomHeader />
      <Divider />
      <ChatRoomMessages sx={{ height: "70vh" }} />
      <ChatRoomInput />
    </StyledPaper>
  );
};

export default ChatRoom;
