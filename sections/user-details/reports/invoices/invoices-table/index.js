import React from "react";
import { Box } from "@mui/material";
import CustomTable from "@/components/custom-table";
import { TableData, columns } from "./invoices-table-data";
import TableHeader from "@/components/custom-table/table-header";

const InvoicesTable = () => {
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

export default InvoicesTable;
