import React, { useState } from "react";
import {
  List,
  Divider,
  Stack,
  Button,
  Paper,
  styled,
  ListSubheader,
} from "@mui/material";
import { DUMMY_DATA_CHATROOMLIST } from "./DUMMY_DATA";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import ChatRoomListItemButton from "./ChatRoomListItemButton";

const StyledListSubheader = styled(ListSubheader)(({ theme }) => ({
  lineHeight: theme.spacing(4),
  position: "static",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

const ChatRoomList = ({ ...paperProps }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleListItemButtonClick = (index) => {
    setSelectedIndex(index);
    console.log("listItem is clicked!");
  };
  return (
    <Paper {...paperProps}>
      <List
        sx={{
          height: "80%",
          overflow: "auto",
        }}
      >
        {DUMMY_DATA_CHATROOMLIST.map((item, index) =>
          item.text === undefined ? (
            <StyledListSubheader key={index.toString()}>
              {item.day}
            </StyledListSubheader>
          ) : (
            <ChatRoomListItemButton
              key={index.toString()}
              handleListItemButtonClick={handleListItemButtonClick}
              item={item}
              index={index}
              selected={selectedIndex === index}
            />
          )
        )}
      </List>
      <Divider variant="middle" />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
          bottom: 0,
          backgroundColor: "white",
          flexGrow: 1,
        }}
        spacing={1}
      >
        <Button
          startIcon={<DeleteOutlinedIcon />}
          sx={{ color: "grey.700", textTransform: "none" }}
          onClick={() => console.log("clear chat clicked!")}
        >
          Clear
        </Button>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{ borderRadius: "16px", width: "80%", textTransform: "none" }}
          onClick={() => console.log("new chat clicked!")}
        >
          New Chat
        </Button>
      </Stack>
    </Paper>
    // </Box>
  );
};

export default ChatRoomList;
