import { Stack, Typography, styled, IconButton, Box } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

const StyledStack = styled(Stack)({
  padding: "12px 16px",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
  borderBottomRightRadius: "12px",
  display: "inline-flex",
  flexDirection: "column",
  maxWidth: "87%",
  spacing: 2,
});

const TextMessage = ({ isLocalParticipant, children }) => {
  return (
    <StyledStack
      spacing={1}
      sx={{
        backgroundColor: isLocalParticipant ? "#0b68f9" : "#eaeef1",
      }}
    >
      <Typography sx={{ color: isLocalParticipant ? "white" : "inherit" }}>
        {children}
      </Typography>

      {isLocalParticipant && (
        <Stack direction="row" spacing={1} alignSelf="end">
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => console.log("copy is clicked!")}
            sx={{
              backgroundColor: "#4189fa", // Change the icon color
              color: "#F5F5F5",
            }}
          >
            <ContentCopyIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => console.log("like is clicked!")}
            sx={{
              backgroundColor: "#4189fa", // Change the icon color
              color: "#F5F5F5",
            }}
          >
            <ThumbUpOutlinedIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => console.log("dislike is clicked!")}
            sx={{
              backgroundColor: "#4189fa", // Change the icon color
              color: "#F5F5F5",
            }}
          >
            <ThumbDownOutlinedIcon />
          </IconButton>
        </Stack>
      )}
    </StyledStack>
  );
};

export default TextMessage;
