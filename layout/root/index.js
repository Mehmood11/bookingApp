import { Box, Stack } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Stack
      sx={{
        // minHeight: "100vh",
        // height: "100%",
        backgroundColor: "#333",
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
