"use client";
import { Box, Stack } from "@mui/material";
import React from "react";
import bg from "../../assets/bg.svg";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { baseAPI } from "@/services/base-api";

const Layout = ({ children }) => {
  return (
    <Stack>
      <ApiProvider api={baseAPI}>{children}</ApiProvider>
    </Stack>
  );
};

export default Layout;
