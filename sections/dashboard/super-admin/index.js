"use client"
import React, { useState } from "react";
import { Box, Button, Card, CardContent, TableHead } from "@mui/material";
import Grid from "@mui/material/Grid";
import DashboardCard from "@/components/dashboard-card";
import AddExtra from "../stepper/add-extra";
import { TableData, cardData, columns } from "./super-admin-data";
import TableHeader from "@/components/custom-table/table-header";
import CustomTable from "@/components/custom-table";

const SuperAdmin = () => {
  const [searchParam, setSearchParam] = useState();
  return (
    <Box>

      <AddExtra />
      {/* <Grid container spacing={2} mb="40px">
        {cardData.map((item) => (
          <Grid item xs={12} md={6} lg={3}>
            <DashboardCard
              key={item.id}
              title={item.title}
              amount={item.amount}
              src={item.src}
              backgroundImage={item.backgroundImage}
            />
          </Grid>
        ))}
      </Grid>
      <Card>
      <CardContent>
      <TableHeader
        onChanged={(e) => {
          setSearchParam(e);
        }}
        filterButtonShow
        filterButtonLabel="Filter"
        tableHeaderData={[
          {
            type: "search",
            FieldProps: {
              name: "search",
              placeholder: "Search name",
            },
          },
        ]}
      />

      <CustomTable
        columns={columns}
        data={TableData}
        isFetching={false}
        isError={false}
        isSuccess
        isPagination
      />
      </CardContent>
      </Card> */}

    </Box>
  );
};

export default SuperAdmin;
