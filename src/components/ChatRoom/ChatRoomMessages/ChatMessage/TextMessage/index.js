import { Typography, styled } from "@mui/material";

const StyledTypography = styled(Typography)({
  padding: "12px 16px",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
  borderBottomRightRadius: "12px",
  display: "inline-block",
  textAlign: "left",
  maxWidth: "87%",
});

const TextMessage = ({ isLocalParticipant, children }) => {
  return (
    <StyledTypography
      sx={{
        color: isLocalParticipant ? "white" : "inherit",
        backgroundColor: isLocalParticipant ? "#0b68f9" : "#eaeef1",
      }}
    >
      {children}
    </StyledTypography>
  );
};

export default TextMessage;
