import React from "react";
import { Box } from "@mui/material";
import CustomTable from "@/components/custom-table";
import { TableData, columns } from "./booking-table-data";
import TableHeader from "@/components/custom-table/table-header";

const BookingTable = () => {
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
        isPagination
      />
    </Box>
  );
};

export default BookingTable;
