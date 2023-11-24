"use client";

import { useRef, useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Pagination,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  Box,
} from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { StyledTableCell, StyledTableRow, styles } from "./custom-table.styles";

import TableSkeleton from "../table-skeleton";
import NoContent from "../no-content";
import IsFetching from "../is-fetching";

// ----------------------------------------------------------------------
// constant
const EMPTY_ARRAY = [];

const cellFunction = (info) => {
  return <Box>{Number(info?.row?.id) + 1}</Box>;
};

const headerFunction = () => <Box>Sr.</Box>;

const CustomTable = ({
  columns,
  data,
  isFetching = false,
  isLoading = false,
  isError = false,
  isSuccess = false,
  totalPages = 1,
  currentPage = 1,
  onPageChange,
  onSortByChange,
  isPagination = true,
  tableContainerSX = {},
  rootSX = {},
  showSerialNo = false,
  onSelected = () => {
    return null;
  },
}) => {
  const [rowSelection, setRowSelection] = useState({});

  const theme = useTheme();
  let columnsData = columns;
  // Handling sort using useRef
  const refSortData = (() => {
    const sortDataMap = {};
    for (const colData of columns) {
      if (colData.isSortable) sortDataMap[colData.id] = 0;
    }
    return sortDataMap;
  })();

  const sortRef = useRef(refSortData);

  const handleSortBy = (colId) => {
    sortRef.current[colId]++;
    if (sortRef.current[colId] % 2 === 1)
      onSortByChange({ id: colId, sortOrder: 1 });
    else onSortByChange({ id: colId, sortOrder: -1 });
  };

  const isSorted = (colId) => {
    return sortRef.current[colId] % 2 === 1;
  };
  if (showSerialNo) {
    columnsData = [
      {
        accessorFn: (row) => row,
        id: "srNo",
        cell: (info) => cellFunction(info),
        header: () => headerFunction(),
        isSortable: false,
      },
      ...columns,
    ];
  } else null;

  const table = useReactTable({
    data: data ?? EMPTY_ARRAY,
    columns: columnsData,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });
  onSelected(table.getSelectedRowModel().flatRows);
  if (isLoading) return <TableSkeleton />;

  return (
    <Grid
      container
      sx={{ borderRadius: "8px", position: "relative", ...rootSX }}
    >
      <IsFetching isFetching={isFetching} />
      <Grid xs={12} item>
        {/* Table Container */}
        <Box sx={{ overflowX: "auto", borderRadius: "8px" }}>
          <TableContainer sx={styles.tableContainer(tableContainerSX, theme)}>
            <Table stickyHeader>
              <TableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <StyledTableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <StyledTableCell key={header.id}>
                        <Box
                          onClick={() =>
                            header.column.columnDef.isSortable &&
                            handleSortBy(header?.id)
                          }
                          sx={styles.cell}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          {header.column.columnDef.isSortable &&
                            !isSorted(header.id) && <KeyboardArrowDownIcon />}
                          {header.column.columnDef.isSortable &&
                            isSorted(header.id) && <KeyboardArrowUpIcon />}
                        </Box>
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))}
              </TableHead>

              {isSuccess && table.getRowModel().rows.length > 0 && (
                <TableBody>
                  {table.getRowModel().rows.map((row) => (
                    <StyledTableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <StyledTableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  ))}
                </TableBody>
              )}
            </Table>
            {(isError || table.getRowModel().rows.length === 0) && (
              <Grid container sx={styles.error(theme)}>
                <Grid item width={200}>
                  <NoContent />
                </Grid>
              </Grid>
            )}
          </TableContainer>
        </Box>

        {/* Pagination */}
        <Grid container>
          <Grid xs={12} item>
            {isSuccess && Boolean(table?.getRowModel()?.rows?.length) && (
              <Box sx={styles.currentPageBox}>
                {isPagination && (
                  <Box>
                    <Pagination
                      sx={styles.pagination}
                      renderItem={(item) => (
                        <PaginationItem
                          slots={{
                            previous: () => <>Previous</>,
                            next: () => <>Next</>,
                          }}
                          {...item}
                        />
                      )}
                      size="small"
                      variant="outlined"
                      shape="rounded"
                      count={totalPages}
                      page={currentPage}
                      onChange={(e, page) => {
                        onPageChange(page);
                      }}
                    />
                  </Box>
                )}
              </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomTable;
