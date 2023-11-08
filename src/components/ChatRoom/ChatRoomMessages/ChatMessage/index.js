import { Avatar, Typography } from "@mui/material";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TextMessage from "./TextMessage";

const ChatMessage = ({
  avatar,
  isLocalParticipant,
  isFirstMessageOfTheDay = false,
  message,
}) => {
  return (
    <Grid2
      container
      component="section"
      direction={isLocalParticipant ? "row-reverse" : "row"}
      sx={{
        marginTop: 1,
        marginBottom: 1,
        width: "100%",
        alignItems: "start",
        flexShrink: 1,
      }}
    >
      <Grid2
        xs={12}
        sx={{
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="body2" color="textSecondary">
          17/07/23
        </Typography>
      </Grid2>

      <Grid2
        xs={1}
        sx={{
          textAlign: isLocalParticipant ? "-webkit-left" : "-webkit-right",
          display: "flex",
          justifyContent: isLocalParticipant ? "flex-start" : "flex-end",
          alignItems: "center",
        }}
      >
        <Avatar
          src="/static/images/avatar/1.jpg"
          alt="Remy Sharp"
          sx={{
            width: "30px",
            height: "30px",
            marginTop: 1,
            marginLeft: isLocalParticipant ? 1 : 0,
            marginRight: isLocalParticipant ? 0 : 1,
          }}
        />
      </Grid2>
      <Grid2
        xs={11}
        sx={{
          textAlign: isLocalParticipant ? "-webkit-right" : "-webkit-left",
        }}
      >
        <TextMessage
          isLocalParticipant={isLocalParticipant}
          message={message}
        />

        <Typography variant="body2">17.22pm</Typography>
      </Grid2>
    </Grid2>
  );
};

export default ChatMessage;
