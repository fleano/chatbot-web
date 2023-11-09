import React from "react";
import DocumentRoomHeader from "./DocumentRoomHeader";
import DocumentRoomMessages from "./DocumentRoomMessages";
import ChatRoomInput from "../../ChatPage/ChatRoom/ChatRoomInput";

const DocumentRoom = () => {
  return (
    <>
      <DocumentRoomHeader />
      <DocumentRoomMessages />
      <ChatRoomInput />
    </>
  );
};

export default DocumentRoom;
