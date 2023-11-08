import React from "react";
import { Box, Paper } from "@mui/material";
import "./App.css";
import ChatRoomList from "./components/ChatRoomList";
import ChatRoom from "./components/ChatRoom";

function App() {
  return (
    <Box sx={{ background: "#E8EDF2", height: "100vh", display: "flex" }}>
      <Box
        sx={{
          width: "25%",
          height: "100%",
        }}
      >
        <Paper sx={{ height: "100%" }}>
          <ChatRoomList />
        </Paper>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          paddingX: 3,
          paddingTop: 3,
        }}
      >
        <Paper sx={{ padding: 2, borderRadius: "16px" }}>
          <ChatRoom />
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
