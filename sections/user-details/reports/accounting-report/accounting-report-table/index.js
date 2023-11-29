import React from "react";
import { Box } from "@mui/material";
import CustomTable from "@/components/custom-table";
import { TableData, columns } from "./accounting-report-table-data";
import TableHeader from "@/components/custom-table/table-header";

const AccountingReportTable = () => {
  return (
    <Box>
      <TableHeader
        tableHeaderData={[]}
      />
      <CustomTable
        columns={columns}
        data={TableData}
        isFetching={false}
        isError={false}
        isSuccess
        isPagination={false}
      />
    </Box>
  );
};

export default AccountingReportTable;
