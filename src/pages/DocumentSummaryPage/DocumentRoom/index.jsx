import React from "react";
import DocumentRoomHeader from "./DocumentRoomHeader";
import DocumentRoomMessages from "./DocumentRoomMessages";
import ChatRoomInput from "../../ChatPage/ChatRoom/ChatRoomInput";
import { Paper, styled, Divider } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  borderRadius: "16px",
}));

const ChatRoom = ({ ...paperProps }) => {
  return (
    <StyledPaper {...paperProps}>
      <DocumentRoomHeader />
      <Divider />
      <DocumentRoomMessages />
      <ChatRoomInput />
    </StyledPaper>
  );
};

export default ChatRoom;
