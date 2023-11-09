import React, { useState } from "react";
import { Box, Typography, IconButton, Stack, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

function ChatRoomHeader() {
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

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 1,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        Heyow!
      </Typography>
      <Stack
        direction="row"
        alignItems={"center"}
        spacing={1}
        divider={<Divider orientation="vertical" variant="middle" flexItem />}
      >
        <IconButton onClick={handleIconClick1}>
          <StarIcon sx={{ color: isStarred ? "#E8C356" : "default" }} />
        </IconButton>
        <IconButton onClick={handleIconClick2}>
          <MoreVertOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleIconClick3}>
          <BorderColorOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleIconClick4}>
          <DeleteOutlinedIcon />
        </IconButton>
        <Typography>10:01 PM, 10/05/2023</Typography>
      </Stack>
    </Box>
  );
}

export default ChatRoomHeader;
