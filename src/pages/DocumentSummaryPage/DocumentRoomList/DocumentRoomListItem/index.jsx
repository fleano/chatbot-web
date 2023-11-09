import React from "react";
import {
  ListItemButton,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  ListItem,
  Stack,
  FormControlLabel,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import Checkbox from "@mui/material/Checkbox";

function DocumentRoomListItem({
  handleListItemClick,
  index,
  selectedIndex,
  item,
}) {
  const handleEdit = (event) => {
    // Handle the edit action
    event.stopPropagation(); // Prevents the ListItemButton from being selected
    console.log("edit is clicked!");
  };

  const handleDelete = (event) => {
    // Handle the delete action
    event.stopPropagation(); // Prevents the ListItemButton from being selected
    console.log("delete is clicked!");
  };
  return (
    <ListItem disablePadding>
      <ListItemButton
        component="li"
        disableRipple
        onClick={() => console.log("item is clicked")}
        selected={selectedIndex === index}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "6px",
          marginX: 2,
          paddingY: 0.5,
          "&.Mui-selected, &.Mui-selected:hover": {
            bgcolor: "#f4f8ff",
            "& .MuiAvatar-root": {
              color: "primary.main",
            },
          },
        }}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Select all"
        />
        <ListItemAvatar sx={{ minWidth: "20px", marginRight: 1 }}>
          <Avatar sx={{ bgcolor: "transparent", color: "initial" }}>
            <SmsOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={{
            flex: 1,
            minWidth: 0, // Ensures it can shrink below its base size if needed
            mr: 2, // Provide spacing between text and icons
          }}
          primary={
            <Typography
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                color: selectedIndex === index ? "primary.main" : "inherit",
              }}
            >
              heee
            </Typography>
          }
        />
        {selectedIndex === index && (
          <Stack direction="row">
            {/* Ensure this box does not shrink */}
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={handleEdit}
              sx={{
                color: "primary.main",
              }}
            >
              <BorderColorOutlinedIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={handleDelete}
              sx={{
                color: "primary.main",
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

export default DocumentRoomListItem;
