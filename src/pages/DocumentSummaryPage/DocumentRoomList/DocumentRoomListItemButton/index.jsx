import React from "react";
import {
  ListItemButton,
  IconButton,
  ListItemText,
  Typography,
  Stack,
  styled,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Checkbox from "@mui/material/Checkbox";

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

function DocumentRoomListItemButton({
  handleListItemButtonClick,
  index,
  item,
  selected,
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
      selected={selected}
      {...listItemButtonProps}
    >
      <Checkbox
        checked={selected}
        onChange={() => handleListItemButtonClick(index)}
      />
      <InsertDriveFileIcon />
      <Stack>
        <ListItemText
          primary={
            <Typography
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                color: selected ? "primary.main" : "inherit",
              }}
            >
              {item.text}
            </Typography>
          }
        />
        {selected && (
          <Stack
            direction="row"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                color: selected ? "primary.main" : "inherit",
              }}
            >
              5.9 Mb
            </Typography>
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
      </Stack>
    </StyledListItemButton>
  );
}

export default DocumentRoomListItemButton;
