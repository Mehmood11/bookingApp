"use client";
import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import TableHeader from "@/components/custom-table/table-header";
import CustomTable from "@/components/custom-table";
import { TableData, columns } from "./manage-sub-user-data";

const ManageSubUser = () => {
  return (
    <Grid container rowSpacing={5} columnSpacing={10}>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h5"
          component="h5"
          sx={{ color: "#1E5E89", fonSize: "20px", fontWeight: "600" }}
        >
          Manage Sub User
        </Typography>
        <Button
          sx={{
            textTransform: "capitalize",
            borderRadius: "0",
            borderBottom: "1px solid",
            mt: 1,
            p: 0,
          }}
        >
          Add Sub User
        </Button>
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

export default ManageSubUser;
