import React from "react";
import { Box, Divider } from "@mui/material";
import CreditLimit from "./credit-limit";
import PreviousLogin from "./previous-login";
import ChangePassword from "./change-password";
import TopUpCreditLimit from "./topup-credit-limit";

const Setting = () => {
  return (
    <Box>
      <CreditLimit />
      <ChangePassword />
      <Divider sx={{ my:5}} />
      <TopUpCreditLimit />
      <Divider sx={{ my:5}} />
      <PreviousLogin />
    </Box>
  );
};

export default Setting;
