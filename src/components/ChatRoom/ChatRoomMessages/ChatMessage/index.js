import React from "react";
import { Avatar, Typography, Box } from "@mui/material";
import TextMessage from "./TextMessage";

const ChatMessage = ({
  avatar,
  isLocalParticipant,
  isFirstMessageOfTheDay = true,
  message,
}) => {
  return (
    <Box sx={{ width: "100%", marginTop: 1, marginBottom: 1 }}>
      {isFirstMessageOfTheDay && (
        <Box sx={{ textAlign: "center", marginBottom: 2 }}>
          <Typography variant="body2" color="textSecondary">
            17/07/23
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "start",
        }}
      >
        <Box sx={{ width: "30px", height: "30px" }}>
          <Avatar
            src={avatar || "/static/images/avatar/1.jpg"}
            alt="User Avatar"
            sx={{ width: "30px", height: "30px" }}
          />
        </Box>

        <Box sx={{ flexGrow: 1, paddingLeft: 2 }}>
          <TextMessage
            isLocalParticipant={isLocalParticipant}
            message={message}
          />
          <Typography variant="body2">17.22pm</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatMessage;
