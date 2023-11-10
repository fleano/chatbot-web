import React from "react";
import ChatMessage from "./ChatMessage";
import { Box, styled } from "@mui/material";
import { CHAT_MESSAGES_DUMMY_DATA } from "./DUMMY_DATA";

const StyledBox = styled(Box)(({ theme }) => ({
  overflow: "auto",
  display: "flex",
  flexDirection: "column-reverse",
}));

const ChatRoomMessages = ({ ...boxProps }) => {
  return (
    <StyledBox {...boxProps}>
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
    </StyledBox>
  );
};

export default ChatRoomMessages;
