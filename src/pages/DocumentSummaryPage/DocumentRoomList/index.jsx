import {
  Stack,
  Button,
  IconButton,
  Divider,
  Typography,
  List,
  Box,
  Paper,
  FormControlLabel,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Checkbox from "@mui/material/Checkbox";
import { DUMMY_DATA_CHATROOMLIST } from "../../ChatPage/ChatRoomList/DUMMY_DATA";
import DocumentRoomListItemButton from "./DocumentRoomListItemButton";

const DayDividerText = styled(Typography)(({ theme }) => ({
  color: "#9AA3AC",
  paddingTop: theme.spacing(2),
}));

const listItemStyle = { marginX: 1, padding: 0 };

const DocumentRoomList = ({ ...paperProps }) => {
  const [selectedItems, setSelectedItems] = useState(new Set());
  const isAllSelected = selectedItems.size === DUMMY_DATA_CHATROOMLIST.length;

  const handleSelectAllChange = () => {
    if (isAllSelected) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(
        new Set(DUMMY_DATA_CHATROOMLIST.map((_, index) => index))
      );
    }
  };

  const handleListItemButtonClick = (index) => {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(index)) {
      newSelectedItems.delete(index);
    } else {
      newSelectedItems.add(index);
    }
    setSelectedItems(newSelectedItems);
  };
  return (
    <Paper {...paperProps}>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        spacing={1}
        direction="row"
        padding={2}
      >
        <Button
          variant="outlined"
          startIcon={<FileUploadOutlinedIcon />}
          sx={{ borderRadius: "16px", textTransform: "none" }}
          onClick={() => console.log("upload file clicked!")}
        >
          Upload file
        </Button>
        <IconButton
          aria-label="search"
          onClick={() => console.log("searching chat clicked!")}
          sx={{
            border: "1px solid", // Add a border
            borderColor: "divider", // Use the theme's divider color for the border
            borderRadius: "50%", // Optional: makes it circular
          }}
        >
          <SearchOutlinedIcon />
        </IconButton>
      </Stack>

      <Divider variant="middle" />

      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        spacing={1}
        direction="row"
        padding={2}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={isAllSelected}
              onChange={handleSelectAllChange}
            />
          }
          label="Select all"
        />
        <Button
          variant="text"
          startIcon={<DeleteOutlinedIcon />}
          sx={{ color: "grey.700", textTransform: "none" }}
          onClick={() => console.log("clear chat clicked!")}
        >
          Clear
        </Button>
      </Stack>
      <List
        disablePadding
        sx={{
          maxHeight: "75%",
          overflow: "auto",
        }}
      >
        {DUMMY_DATA_CHATROOMLIST.map((item, index) =>
          item.text === undefined ? (
            <Box key={index.toString()} component="li" sx={listItemStyle}>
              <DayDividerText variant="subtitle1">{item.day}</DayDividerText>
            </Box>
          ) : (
            <DocumentRoomListItemButton
              sx={listItemStyle}
              key={index.toString()}
              handleListItemButtonClick={() => handleListItemButtonClick(index)}
              item={item}
              index={index}
              selected={selectedItems.has(index)}
            />
          )
        )}
      </List>
    </Paper>
  );
};

export default DocumentRoomList;
