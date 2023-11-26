"use client"
import { Box, Stack } from "@mui/material";
import React from "react";
import bg from "../../assets/bg.svg";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const Layout = ({ children }) => {
  return (
    <Stack
      sx={{
        // minHeight: "100vh",
        height: "100vh",
        maxHeight: "90vh",
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "top",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        p: 3,
        borderRadius: "10px",
        boxSizing: "border-box",
      }}
    >
     <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
     </LocalizationProvider>
    </Stack>
  );
};

export default Layout;
