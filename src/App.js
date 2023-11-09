import React from "react";
import { Box, Paper, styled } from "@mui/material";
import "./App.css";
import ChatRoomList from "./components/ChatRoomList";
import ChatRoom from "./components/ChatRoom";

const AppContainer = styled("main")({
  background: "#E8EDF2",
  height: "100vh",
  display: "flex",
});

const ChatRoomListContainer = styled(Paper)(({ theme }) => ({
  width: "275px",
}));

function App() {
  return (
    <AppContainer>
      <ChatRoomListContainer>
        <ChatRoomList />
      </ChatRoomListContainer>

      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Paper
          sx={{
            padding: 2,
            borderRadius: "16px",
            margin: 3,
          }}
        >
          <ChatRoom />
        </Paper>
      </Box>
    </AppContainer>
  );
}

export default App;
