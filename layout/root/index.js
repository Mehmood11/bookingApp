"use client";
import { Box, Stack } from "@mui/material";
import React from "react";
import bg from "../../assets/bg.svg";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { baseAPI } from "@/services/base-api";
const Layout = ({ children }) => {
  return (
    <ApiProvider api={baseAPI}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {children}
      </LocalizationProvider>
    </ApiProvider>
  );
};

export default Layout;
