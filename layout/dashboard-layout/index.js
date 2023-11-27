import React from "react";
import { Box, Stack } from "@mui/material";
import bg from "../../assets/bg.svg";
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
      <Header />

      <Box sx={{ p: 2, mt: 2 }} height={"100%"}>
        {children}
      </Box>
    </Stack>
  );
};

export default DashboardLayout;
