import React from "react";
import { Box } from "@mui/material";
import Header from "./header";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box p={2} height={'100%'}>{children}</Box>
    </>
  );
};

export default DashboardLayout;
