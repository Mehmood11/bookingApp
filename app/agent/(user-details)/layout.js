"use client";
import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import Header from "@/layout/dashboard-layout/header";
import UserSideBar from "@/sections/user-details/user-sideBar/userSideBar";

const UserDetailsLayout = ({ children }) => {
  return (
    <Stack
      sx={{
        borderRadius: "1.3125rem",
        background:
          "linear-gradient(180deg, #1E5E89 0%, #FFF 82.66%, #FFF 139.45%)",
        height: "100%",
        maxHeight: "90vh",
        p: 3,
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
      <Grid mt={1} container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <UserSideBar />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Box
            sx={{
              backgroundColor: "#f1f1f1",
              borderRadius: "12px",
              p: 3,
              boxSizing: "border-box",
              color: "#465365",
              border: "1px solid #FFF",
              background:
                "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
              boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default UserDetailsLayout;
