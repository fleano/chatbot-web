import React from "react";
import { Stack, styled, Skeleton, Box } from "@mui/material";

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "12px 16px",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
  borderBottomRightRadius: "12px",
  backgroundColor: "#0b68f9",
}));

const TextMessageSkeleton = () => {
  return (
    <StyledStack spacing={1} direction={"row"}>
      <Box>
        <Skeleton variant="circular" width={10} height={10} />
      </Box>
      <Box>
        <Skeleton
          variant="circular"
          width={10}
          height={10}
          sx={{ backgroundColor: "white" }}
        />
      </Box>
      <Box>
        <Skeleton variant="circular" width={10} height={10} />
      </Box>
    </StyledStack>
  );
};

export default TextMessageSkeleton;
