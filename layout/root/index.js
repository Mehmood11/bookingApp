import { Box, Stack } from "@mui/material";
import React from "react";
import bg from "../../assets/bg.svg";
const Layout = ({ children }) => {
  return (
    <Stack
      sx={{
        // minHeight: "100vh",
        height: "100vh",
        maxHeight: "90vh",
        // backgroundImage: `url(${bg.src})`,
        backgroundPosition: "top",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        p: 3,
        borderRadius: "10px",
        boxSizing: "border-box",
      }}
    >
      {children}
    </Stack>
  );
};

export default Layout;
