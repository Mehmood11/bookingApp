import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./header";

const DashboardLayout = ({ children }) => {
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
      {/* <Header /> */}
      <Box height={"100%"}>
        {children}
      </Box>
    </Stack>
  );
};

export default DashboardLayout;
