import { Box } from "@mui/material";
import React from "react";

const Payment = () => {
  return (
    <Box sx={{ paddingX: "5rem" }}>
      <Box sx={{ fontSize: "20px", fontWeight: 600, pt: 4, mb: 2 }}>
        Choose a <span style={{ color: "#2278C8" }}>Payment</span>Method
      </Box>
    </Box>
  );
};

export default Payment;
