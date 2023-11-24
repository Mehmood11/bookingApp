"use client";
// @mui
import { styled } from "@mui/material/styles";
import { TableCell, TableRow, tableCellClasses } from "@mui/material";
// ----------------------------------------------------------------------
// STYLED COMPONENTS
export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    background: "#E2E8F0",
    height: 48,
    color: "#2278C8",
    textAlign: "center",
    fontWeight: 650,
    textTransform: "capitalize",
    fontSize: 14,
    whiteSpace: "nowrap",
    borderBottom: "none",
    cursor: "pointer",
    zIndex: "1",
    padding: "0px 15px",
  },
  [`&.${tableCellClasses.root}`]: {
    boxShadow: "unset !important",
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWeight: 400,
    textAlign: "left",
    borderBottom: "none",
    whiteSpace: "pre-wrap",
    padding: "10px 15px",
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  background: theme.palette.background.paper,
  // hide last border
  "&:last-child th": {
    border: 0,
    borderRadius: 0,
  },
  "&:first-child th": {
    border: 0,
    borderRadius: 0,
  },
  "&:first-of-type": {
    background: theme.palette.background.paper,
  },
}));

// ----------------------------------------------------------------------
// styles

export const styles = {
  tableContainer: (tableContainerSX, theme) => ({
    "&::-webkit-scrollbar": {
      width: 10,
      height: 10,
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 2,
    },
    mt: theme.palette.mode === "dark" ? 0.5 : 0,
    backgroundColor:
      theme.palette.mode === "light" ? "#F8FCFF" : theme.palette.grey[800],
    ...tableContainerSX,
  }),
  cell: {
    display: "flex",
    justifyContent: "flex-start",
  },
  currentPageBox: {
    display: "flex",
    my: "15px",
    px: "25px",
    alignItems: "center",
  },
  currentPage: (theme) => ({
    color: theme.palette.grey[600],
    fontSize: "12px",
    fontFamily: theme.typography.fontFamily,
  }),
  error: (theme) => ({
    background: theme.palette.background.default,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  }),
  pagination: (theme) => ({
    ".Mui-selected": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: "#FFFFFF",
    },
  }),
};