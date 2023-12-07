import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import ProfileCreditLimit from "./profile-credit-limit";
import AgentDetails from "./agent-details";
import SubAgent from "./manage-sub-agent";
import ManageSubUser from "./manage-sub-user";
import ProfileAddress from "./profile-address";

const Profile = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          color: "#2278C8",
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        Profile
      </Typography>

      <Divider sx={{ my: 1 }} />
      <ProfileCreditLimit />
      <Divider sx={{ my: 1 }} />
      <AgentDetails />
      <Divider sx={{ my: 1 }} />
      <ProfileAddress />
      <Divider sx={{ my: 1 }} />
      <SubAgent />
      <Divider sx={{ my: 1 }} />
      <ManageSubUser />
    </Box>
  );
};

export default Profile;
