import React, { useState } from "react";
import {
  List,
  Divider,
  Stack,
  Button,
  Typography,
  Paper,
  styled,
  Box,
} from "@mui/material";
import { DUMMY_DATA_CHATROOMLIST } from "./DUMMY_DATA";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import ChatRoomListItemButton from "./ChatRoomListItemButton";

const DayDividerText = styled(Typography)(({ theme }) => ({
  color: "#9AA3AC",
  paddingTop: theme.spacing(2),
}));

const listItemStyle = { marginX: 1, padding: 0 };

const ChatRoomList = ({ ...paperProps }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleListItemButtonClick = (index) => {
    setSelectedIndex(index);
    console.log("listItem is clicked!");
  };
  return (
    <Paper {...paperProps}>
      <List
        disablePadding
        sx={{
          height: "85vh",
          overflow: "auto",
        }}
      >
        {DUMMY_DATA_CHATROOMLIST.map((item, index) =>
          item.text === undefined ? (
            <Box key={index.toString()} component="li" sx={listItemStyle}>
              <DayDividerText variant="subtitle1">{item.day}</DayDividerText>
            </Box>
          ) : (
            <ChatRoomListItemButton
              sx={listItemStyle}
              key={index.toString()}
              handleListItemButtonClick={handleListItemButtonClick}
              index={index}
              selectedIndex={selectedIndex}
              item={item}
            />
          )
        )}
      </List>
      <Divider variant="middle" />
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
          bottom: 0,
          backgroundColor: "white",
        }}
        spacing={1}
      >
        <Button
          variant="text"
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
  );
};

export default ChatRoomList;
