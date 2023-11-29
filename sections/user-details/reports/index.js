import { Box, Typography } from "@mui/material";
import React from "react";
import Voucher from "./voucher";
import CustomTabs from "@/components/custom-tabs/customTabs";
import Receipts from "./receipts";
import Invoices from "./invoices";
import AccountingReport from "./accounting-report";

const tabsData = [{}];

const Reports = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          color: "#2278C8",
          fontSize: "24px",
          fontWeight: "600",
          mt: 2,
          mb: 5,
        }}
      >
        Report
      </Typography>
      <CustomTabs
        Index={0}
        tabsArray={["Voucher", "Receipts", "Invoices", "Accounting Report"]}
      >
        <Voucher />
        <Receipts />
        <Invoices />
        <AccountingReport />
      </CustomTabs>
    </Box>
  );
};

export default Reports;
