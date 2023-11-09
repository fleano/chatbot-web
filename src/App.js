import React from "react";
import { Box, Paper, styled } from "@mui/material";
import "./App.css";
import ChatRoomList from "./components/ChatRoomList";
import ChatRoom from "./components/ChatRoom";

const AppContainer = styled("div")({
  background: "#E8EDF2",
  height: "100vh",
  display: "flex",
});

const ChatRoomListContainer = styled(Paper)({
  width: "15%",
  height: "100%",
});

function App() {
  return (
    <AppContainer>
      <ChatRoomListContainer>
        <ChatRoomList />
      </ChatRoomListContainer>

      <Box
        sx={{
          flexGrow: 1,
          paddingX: 3,
          paddingTop: 3,
        }}
      >
        <Paper
          sx={{
            padding: 2,
            borderRadius: "16px",
          }}
        >
          <ChatRoom />
        </Paper>
      </Box>
    </AppContainer>
  );
}

export default App;
