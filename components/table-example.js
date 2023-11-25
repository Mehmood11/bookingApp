"use client";

import { Box } from "@mui/material";
import React, { useState } from "react";
import CustomTable from "./custom-table";
import TableHeader from "./custom-table/table-header";

const TableExample = () => {
  const [searchParam, setSearchParam] = useState();

  const exampleData = [
    {
      id: 1,
      title: "Khan",
      desc: "asdhaskjdhadjahsd dasdjdajsdh",
    },
  ];
  const column = [
    {
      accessorFn: (row) => row.title ?? "-",
      id: "title",
      cell: (info) => info.getValue(),
      header: () => <span>Title</span>,
      isSortable: false,
    },
    {
      accessorFn: (row) => row.desc ?? "-",
      id: "desc",
      cell: (info) => info.getValue(),
      header: () => <span>Description</span>,
      isSortable: false,
    },
  ];
  return (
    <Box>
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
        data={exampleData}
        columns={column}
        // isLoading={isLoading}
        // isFetching={isFetching}
        // isError={isError}
        isPagination
        isSuccess={true}
        // totalPages={data?.data?.meta?.pages ?? 0}
        // currentPage={data?.data?.meta?.page ?? 1}
        // onPageChange={(onPageData: any) => {
        //   setParams({
        //     page: onPageData,
        //     offset: (onPageData - 1) * 10,
        //   });
        // }}
        // onSelected={(e) => {
        //   if (e.length > 0) {
        //     setShow(true);
        //   } else {
        //     setShow(false);
        //   }
        // }}
      />
    </Box>
  );
};

export default TableExample;
