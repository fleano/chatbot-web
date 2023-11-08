import { Box } from "@mui/material";
import "./App.css";
import ChatRoomList from "./components/ChatRoomList";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <Box sx={{ background: "#E8EDF2" }} height="100vh">
      <Grid container height="100%" spacing={2}>
        <Grid xs={12} sm={3} height="100%">
          <ChatRoomList />
        </Grid>
        <Grid xs={12} sm={9}>
          <ChatWindow />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
