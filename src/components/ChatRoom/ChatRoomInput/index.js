import { Send } from "@mui/icons-material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const ChatRoomInputContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
  bottom: 0,
});

const InputTextField = styled(TextField)(() => ({
  "& >.MuiInputBase-root": {
    borderRadius: "24px",
  },
  flex: 1,
}));

const ChatRoomInput = ({}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (message.trim()) {
      // handleSendMessage(message);
      console.log(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <ChatRoomInputContainer>
      <Paper
        component="form"
        sx={{
          p: "4px 4px",
          display: "flex",
          alignItems: "end",
          width: "100%",
        }}
        onSubmit={handleSubmit}
      >
        <IconButton onClick={() => console.log("try to send a file")}>
          <AttachFileIcon style={{ transform: "rotate(45deg)" }} />
        </IconButton>
        <InputTextField
          placeholder="Write a message..."
          type="text"
          inputProps={{ "aria-label": "send message" }}
          size="small"
          multiline
          onKeyDown={handleKeyDown}
          maxRows={4}
          value={message}
          onChange={handleChange}
        />

        <Box>
          <IconButton type="submit" color="primary" aria-label="directions">
            <Send />
          </IconButton>
        </Box>
      </Paper>
    </ChatRoomInputContainer>
  );
};

export default ChatRoomInput;
