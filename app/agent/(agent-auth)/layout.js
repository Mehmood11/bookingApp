import { Box, Stack } from "@mui/material";
import React from "react";

export default function authLauout({ children }) {
  return (
    <Box
      sx={{
        borderRadius: "1.3125rem",
        background:
          "linear-gradient(180deg, #1E5E89 0%, #FFF 82.66%, #FFF 139.45%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        height: "100%",
        minHeight: "93vh",
        p: 3,
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "0.4em",
          height: "95%",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#C2D3DF",
          borderRadius: "1rem",
          height: "95%",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "1rem",
          backgroundColor: "#21608B",
        },
      }}
    >
      {children}
    </Box>
  );
}
