import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import CreditLimit from "./credit-limit";
import PreviousLogin from "./previous-login";
import ChangePassword from "./change-password";
import TopUpCreditLimit from "./topup-credit-limit";

const Setting = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          color: "#2278C8",
          fontSize: "24px",
          fontWeight: "600",
          my:1
        }}
      >
        Setting
      </Typography>
      <CreditLimit />
      <Divider sx={{ my: 4 }} />
      <ChangePassword />
      <Divider sx={{ my: 4 }} />
      <TopUpCreditLimit />
      <Divider sx={{ my: 4 }} />
      <PreviousLogin />
    </Box>
  );
};

export default Setting;
