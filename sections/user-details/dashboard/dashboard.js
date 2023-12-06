import { Box, Typography } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          color: "#2278C8",
          fontSize: "24px",
          fontWeight: "600",
          mt: 1,
          mb: 2,
        }}
      >
        Dashboard
      </Typography>
      <Box
        sx={{
          height: "100vh",
          maxHeight: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        We are continuously working to <br /> serve you better, this page will
        be <br />
        updated soon.
      </Box>
    </>
  );
};

export default Dashboard;
