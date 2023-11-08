import { Typography } from "@mui/material";

const TextMessage = ({ isLocalParticipant, message }) => {
  return (
    <Typography
      sx={{
        padding: "8px 16px",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        borderBottomLeftRadius: isLocalParticipant ? "12px" : 0,
        borderBottomRightRadius: isLocalParticipant ? 0 : "12px",
        color: isLocalParticipant ? "white " : "inherit",
        backgroundColor: isLocalParticipant ? "#0b68f9" : "#eaeef1",
        display: "inline-block",
        textAlign: "left",
        maxWidth: "87%",
      }}
    >
      {message}
    </Typography>
  );
};

export default TextMessage;
