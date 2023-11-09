import React from "react";
import { Divider } from "@mui/material";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatRoomInput from "./ChatRoomInput";
import ChatRoomMessages from "./ChatRoomMessages";

const ChatRoom = () => {
  return (
    <>
      <ChatRoomHeader />
      <Divider />
      <ChatRoomMessages />

      <ChatRoomInput />
    </>
  );
};

export default ChatRoom;
