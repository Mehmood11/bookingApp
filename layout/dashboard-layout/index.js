import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./header";
import Footer from "./footer";

const DashboardLayout = ({ children }) => {
  return (
    <Stack sx={{ height: "84vh" }}>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Stack>
  );
};

export default DashboardLayout;
