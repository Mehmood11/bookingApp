import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./header";
import bg from "../../assets/bg.svg";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box p={2} height={'100%'}>{children}</Box>
    </>
  );
};

export default DashboardLayout;
