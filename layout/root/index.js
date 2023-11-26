"use client";
import { Box, Stack } from "@mui/material";
import React from "react";
import bg from "../../assets/bg.svg";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { baseAPI } from "@/services/base-api";

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
      <ApiProvider api={baseAPI}>{children}</ApiProvider>
    </Stack>
  );
};

export default Layout;
