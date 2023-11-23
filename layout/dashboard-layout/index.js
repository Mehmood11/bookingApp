import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./header";
import Footer from "./footer";

const DashboardLayout = ({ children }) => {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
};

export default DashboardLayout;
