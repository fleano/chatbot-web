import React from "react";
import {
  ListItem,
  ListItemButton,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

function ChatRoomListItem({ handleListItemClick, index, selectedIndex, item }) {
  const handleEdit = (event) => {
    // Handle the edit action
    event.stopPropagation(); // Prevents the ListItemButton from being selected
  };

  const handleDelete = (event) => {
    // Handle the delete action
    event.stopPropagation(); // Prevents the ListItemButton from being selected
  };
  return (
    <ListItem key={index} disablePadding>
      <ListItemButton
        onClick={() => handleListItemClick(index)}
        selected={selectedIndex === index}
        sx={{
          display: "flex",
          width: "100%",
          py: 1,
          px: 2,
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: "action.selected",
            color: "primary.main",
            "& .MuiAvatar-root": {
              bgcolor: "primary.main",
              color: "primary.contrastText",
            },
            "&:hover": {
              bgcolor: "action.hover",
            },
          },
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <ChatOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={{
            flex: 1,
          }}
          primary={
            <Typography
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {item.text}
            </Typography>
          }
        />
        {selectedIndex === index && (
          <Stack direction="row">
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={handleEdit}
              sx={{
                color: "primary.main", // Change the icon color
              }}
            >
              <BorderColorOutlinedIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={handleDelete}
              sx={{
                color: "primary.main", // Change the icon color
              }}
            >
              <DeleteOutlinedIcon />
            </IconButton>
          </Stack>
        )}
      </ListItemButton>
    </ListItem>
  );
}

export default ChatRoomListItem;
