import React from "react";
import { Box, Paper } from "@mui/material";
import "./App.css";
import ChatRoomList from "./components/ChatRoomList";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <Box sx={{ background: "#E8EDF2", height: "100vh", display: "flex" }}>
      <Box
        sx={{
          width: "25%", // 100% on extra-small screens, 25% on small screens and up
          height: "100%",
        }}
      >
        <Paper sx={{ height: "100%" }}>
          <ChatRoomList />
        </Paper>
      </Box>
      <Box
        sx={{
          flexGrow: 1, // Takes up the remaining space
          height: "100%",
        }}
      >
        <ChatWindow />
      </Box>
    </Box>
  );
}

export default App;
