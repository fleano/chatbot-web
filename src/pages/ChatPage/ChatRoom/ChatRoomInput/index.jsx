import { Send } from "@mui/icons-material";
import {
  Box,
  IconButton,
  TextField,
  styled,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";

const InputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  position: "sticky",
  bottom: 0,
  borderRadius: "10px",
  paddingRight: theme.spacing(2),
}));

const InputTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.spacing(2),
  "& >.MuiInputBase-root": {
    borderRadius: theme.spacing(3),
    paddingRight: theme.spacing(0.5),
  },
}));

const SendIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
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

  return (
    <InputContainer component="form" onSubmit={handleSubmit}>
      <InputTextField
        placeholder="Write a message..."
        type="text"
        size="small"
        multiline
        onKeyDown={handleKeyDown}
        maxRows={4}
        value={message}
        onChange={handleChange}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SendIconButton size="small" type="submit" aria-label="send">
                <Send />
              </SendIconButton>
            </InputAdornment>
          ),
        }}
      />
    </InputContainer>
  );
};

export default ChatRoomInput;
