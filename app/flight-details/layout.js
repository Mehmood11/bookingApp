import React from "react";
import { Box, Stack } from "@mui/material";

const FlightDetailsLayout = ({ children }) => {
  return (
    <Stack
      sx={{
        borderRadius: "1.3125rem",
        background:
          "linear-gradient(180deg, #1E5E89 0%, #FFF 82.66%, #FFF 139.45%)",
        height: "100%",
        maxHeight: "90vh",
        p: 3,
      }}
    >
      {children}
    </Stack>
  );
};

export default FlightDetailsLayout;
