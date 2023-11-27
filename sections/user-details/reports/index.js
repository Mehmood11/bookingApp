import { Box } from "@mui/material";
import React from "react";
import Voucher from "./voucher";
import CustomTabs from "@/components/custom-tabs/customTabs";
import Receipts from "./receipts";
import Invoices from "./invoices";
import AccountingReport from "./accounting-report";

const tabsData = [{}];

const Reports = () => {
  return (
    <CustomTabs
      Index={0}
      tabsArray={["Voucher", "Receipts", "Invoices", "Accounting Report"]}
    >
      <Voucher />
      <Receipts />
      <Invoices />
      <AccountingReport />
    </CustomTabs>
  );
};

export default Reports;
