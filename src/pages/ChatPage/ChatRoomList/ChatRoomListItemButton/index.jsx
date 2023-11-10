import React from "react";
import {
  ListItemButton,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Stack,
  styled,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "6px",
  "&.Mui-selected, &.Mui-selected:hover": {
    bgcolor: "#f4f8ff",
    "& .MuiAvatar-root": {
      color: theme.palette.primary.main,
    },
  },
}));

function ChatRoomListItemButton({
  handleListItemButtonClick,
  index,
  selectedIndex,
  item,
  ...listItemButtonProps
}) {
  const handleEdit = (event) => {
    event.stopPropagation();
    console.log("edit is clicked!");
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    console.log("delete is clicked!");
  };
  return (
    <StyledListItemButton
      component="li"
      disableRipple
      onClick={() => handleListItemButtonClick(index)}
      selected={selectedIndex === index}
      {...listItemButtonProps}
    >
      <ListItemAvatar sx={{ minWidth: "20px" }}>
        <Avatar sx={{ bgcolor: "transparent", color: "initial" }}>
          <SmsOutlinedIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              color: selectedIndex === index ? "primary.main" : "inherit",
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
              color: "primary.main",
            }}
          >
            <BorderColorOutlinedIcon />
          </IconButton>
          <IconButton
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
    </StyledListItemButton>
  );
}

export default ChatRoomListItemButton;
