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
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "0.4em",
          height: "95%",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#C2D3DF",
          borderRadius: "1rem",
          height: "95%",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "1rem",
          backgroundColor: "#21608B",
        },
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
