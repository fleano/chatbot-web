import { Send } from "@mui/icons-material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Box, IconButton, Paper, TextField, styled } from "@mui/material";
import React, { useState } from "react";

const ChatRoomInputPaper = styled(Paper)({
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  position: "sticky",
  bottom: 0,
  padding: "4px 4px",
  borderRadius: "10px",
});


const InputTextField = styled(TextField)(() => ({
  "& >.MuiInputBase-root": {
    borderRadius: "24px",
  },
  flex: 1,
}));

const ChatRoomInput = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (message.trim()) {
      console.log("Message being sent:", message);
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

  console.log("being rendered");

  return (
    <ChatRoomInputPaper component="form" onSubmit={handleSubmit}>
      <IconButton onClick={() => console.log("try to send a file")}>
        <AttachFileIcon sx={{ transform: "rotate(45deg)" }} />
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
    </ChatRoomInputPaper>
  );
};

export default ChatRoomInput;
