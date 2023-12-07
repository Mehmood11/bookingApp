import React from "react";
import { Grid, Typography } from "@mui/material";
import CustomTable from "@/components/custom-table";
import { TableData, columns } from "./previous-login-data";
import TableHeader from "@/components/custom-table/table-header";

const PreviousLogin = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h5"
          component="h5"
          sx={{ color: "#1E5E89", fontSize: "20px", fontWeight: "600" }}
        >
         Previous Login
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ color: "#64748B", fontSize: "12px" }}
        >
          History of your past login
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <TableHeader tableHeaderData={[]} />

        <CustomTable
          columns={columns}
          data={TableData}
          isFetching={false}
          isError={false}
          isSuccess
          isPagination={false}
        />
      </Grid>
    </Grid>
  );
};

export default PreviousLogin;
