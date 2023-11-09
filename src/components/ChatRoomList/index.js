import React, { useState } from "react";
import ChatRoomListItem from "./ChatRoomListItem";
import {
  List,
  Divider,
  Stack,
  Button,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { DUMMY_DATA_CHATROOMLIST } from "./DUMMY_DATA";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";

const ChatRoomList = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <Box
        sx={{
          height: "90vh",
          overflow: "auto",
        }}
      >
        <List>
          {DUMMY_DATA_CHATROOMLIST.map((item, index) => {
            if (item.text === undefined) {
              return (
                <ListItem key={index.toString()}>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" sx={{ color: "#9AA3AC" }}>
                        {item.day}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            }
            return (
              <ChatRoomListItem
                key={index.toString()}
                handleListItemClick={handleListItemClick}
                index={index}
                selectedIndex={selectedIndex}
                item={item}
              />
            );
          })}
        </List>
      </Box>
      <Divider variant="middle" />
      <Stack
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
    </>
  );
};

export default ChatRoomList;
