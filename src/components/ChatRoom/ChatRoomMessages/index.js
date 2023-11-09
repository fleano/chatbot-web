import React from "react";
import ChatMessage from "./ChatMessage";
import { Box } from "@mui/material";
import { CHAT_MESSAGES_DUMMY_DATA } from "./DUMMY_DATA";

const ChatRoomMessages = () => {
  return (
    <Box
      sx={{
        overflow: "auto",
        height: "80vh",
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      {CHAT_MESSAGES_DUMMY_DATA.map((item, index) => (
        <ChatMessage
          key={index.toString()}
          isLocalParticipant={item.isLocalParticiapnt}
          message={item.message}
          isFirstMessageOfTheDay={item.isFirstMessageOfTheDay}
          showAvatar={item.showAvatar}
          time={item.time}
          showTime={item.showTime}
        />
      ))}
    </Box>
  );
};

export default ChatRoomMessages;
