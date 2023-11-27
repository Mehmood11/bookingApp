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
        maxHeight: "90vh",
        p: 3,
      }}
    >
      <Header />
      {children}
    </Stack>
  );
};

export default FlightDetailsLayout;
