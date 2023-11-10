import {
  Stack,
  Button,
  IconButton,
  Divider,
  ListItem,
  ListItemText,
  Typography,
  List,
  FormControlLabel,
} from "@mui/material";
import React from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DocumentRoomListItem from "./DocumentRoomListItem";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Checkbox from "@mui/material/Checkbox";

const DocumentRoomList = () => {
  return (
    <>
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
        </Button>{" "}
        <IconButton
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
        <FormControlLabel control={<Checkbox defaultChecked />} label="Select all" />
        <Button
          variant="text"
          startIcon={<DeleteOutlinedIcon />}
          sx={{ color: "grey.700", textTransform: "none" }}
          onClick={() => console.log("clear chat clicked!")}
        >Clear</Button>
      </Stack>
      <List sx={{height:"70vh", overflow:"auto"}}>
        <ListItem
        //   key={index.toString()}
        >
          <ListItemText
            primary={
              <Typography variant="subtitle1" sx={{ color: "#9AA3AC" }}>
                Today
              </Typography>
            }
          />
        </ListItem>
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
        <DocumentRoomListItem />
      </List>
    </>
  );
};

export default DocumentRoomList;
