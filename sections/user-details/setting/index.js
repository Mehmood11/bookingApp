import { Box } from "@mui/material";
import React from "react";
import CreditLimit from "./credit-limit";
import ChangePassword from "./change-password";
import TopUpCreditLimit from "./topup-credit-limit";

const Setting = () => {
  return (
    <Box>
      <CreditLimit />
      <ChangePassword />
      <TopUpCreditLimit />
    </Box>
  );
};

export default Setting;
