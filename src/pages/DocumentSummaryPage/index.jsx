import React from "react";
import { Box, Paper, styled } from "@mui/material";
import DocumentRoomList from "./DocumentRoomList";
import DocumentRoom from "./DocumentRoom";

const MainContainer = styled("main")({
  background: "#E8EDF2",
  height: "100vh",
  display: "flex",
});

const DocumentRoomListContainer = styled(Paper)(() => ({
  width: "320px",
}));

const DocumentSummaryPage = () => {
  return (
    <MainContainer>
      <DocumentRoomListContainer>
        <DocumentRoomList />
      </DocumentRoomListContainer>

      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Paper
          sx={{
            padding: 2,
            borderRadius: "16px",
            margin: 3,
          }}
        >
          <DocumentRoom />
        </Paper>
      </Box>
    </MainContainer>
  );
};

export default DocumentSummaryPage;
