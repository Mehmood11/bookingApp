import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./header";

const DashboardLayout = ({ children }) => {
  return (
    <Stack sx={{ height: "100vh", maxHeight: "90vh" }}>
      <Header />
      <Box p={2}>{children}</Box>
    </Stack>
  );
};

export default DashboardLayout;
