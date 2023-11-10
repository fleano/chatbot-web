import React from "react";
import { Box, styled } from "@mui/material";
import DocumentRoomList from "./DocumentRoomList";
import ChatRoom from "../ChatPage/ChatRoom";

const SideBox = styled(Box)(() => ({
  width: "320px",
  minWidth: "320px",
  height: "100%",
}));

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  padding: theme.spacing(2),
  justifyContent: "center",
  alignItems: "center",
}));

function DocumentSummaryPage() {
  return (
    <Box sx={{ background: "#E8EDF2", height: "80vh", display: "flex" }}>
      <SideBox>
        <DocumentRoomList sx={{ height: "100%" }} />
      </SideBox>
      <MainBox>
        <ChatRoom sx={{ height: "90%" }} />
      </MainBox>
    </Box>
  );
}

export default DocumentSummaryPage;
