import React from "react";
import { Box, styled } from "@mui/material";
import ChatRoomList from "./ChatRoomList";
import ChatRoom from "./ChatRoom";

const SideBox = styled(Box)((theme) => ({
  width: "320px",
  minWidth: "320px",
  height: "100%",
}));

function ChatPage() {
  return (
    <Box sx={{ background: "#E8EDF2", height: "100vh", display: "flex" }}>
      <SideBox>
        <ChatRoomList sx={{ height: "100%" }} />
      </SideBox>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <ChatRoom />
      </Box>
    </Box>
  );
}

export default ChatPage;
