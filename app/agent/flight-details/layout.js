"use client";
import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "@/layout/dashboard-layout/header";

const FlightDetailsLayout = ({ children }) => {
  return (
    <Stack
      sx={{
        borderRadius: "1.3125rem",
        background:
          "linear-gradient(180deg, #1E5E89 0%, #FFF 82.66%, #FFF 139.45%)",
        height: "100%",
        maxHeight: "93vh",
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
      <Header />
      <Box mt={6}>{children}</Box>
    </Stack>
  );
};

export default FlightDetailsLayout;
