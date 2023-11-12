import React from "react";
import { Box, styled } from "@mui/material";
import ChatRoomList from "./ChatRoomList";
import ChatRoom from "./ChatRoom";

const SideBox = styled(Box)(() => ({
  width: "320px",
  minWidth: "320px",
}));

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  padding: theme.spacing(2),
}));

function ChatPage() {
  return (
    <Box sx={{ background: "#E8EDF2", height: "90vh", display: "flex" }}>
      <SideBox>
        <ChatRoomList sx={{ height: "100%" }} />
      </SideBox>
      <MainBox>
        <ChatRoom sx={{ height: "90%" }} />
      </MainBox>
    </Box>
  );
}

export default ChatPage;
