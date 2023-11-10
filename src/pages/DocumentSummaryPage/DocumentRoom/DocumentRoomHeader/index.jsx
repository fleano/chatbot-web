import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Divider,
  Chip,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

function DocumentRoomHeader() {
  const [isStarred, setIsStarred] = useState(false);
  // Define click handlers for each icon
  const handleIconClick1 = () => {
    setIsStarred((prev) => !prev);
  };

  const handleIconClick2 = () => {
    console.log("icon 2 clicked");
  };

  const handleIconClick3 = () => {
    console.log("icon 3 clicked");
  };

  const handleIconClick4 = () => {
    console.log("icon 4 clicked");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 1,
        paddingRight: 2,
      }}
    >
      <Chip
        icon={<InsertDriveFileIcon />}
        label={
          <>
            <Typography>Pride and prejucdie.pdf</Typography>
          </>
        }
        onDelete={handleDelete}
      />
      <Stack
        direction="row"
        alignItems={"center"}
        spacing={1}
        divider={<Divider orientation="vertical" variant="middle" flexItem />}
      >
        <IconButton aria-label="star" onClick={handleIconClick1}>
          <StarIcon sx={{ color: isStarred ? "#E8C356" : "default" }} />
        </IconButton>
        <IconButton aria-label="options" onClick={handleIconClick2}>
          <MoreVertOutlinedIcon />
        </IconButton>
        <IconButton aria-label="edit" onClick={handleIconClick3}>
          <BorderColorOutlinedIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleIconClick4}>
          <DeleteOutlinedIcon />
        </IconButton>
        <Typography>10:01 PM, 10/05/2023</Typography>
      </Stack>
    </Box>
  );
}

export default DocumentRoomHeader;
