import { Button } from "@mui/material";

export const TableData = [
  {
    id: 1,
    subAgentCode: "BK3663",
    subAgentName: "John",
    phoneNo: "1234567",
    regDate: "01/11/2023",
    edit: "Edit",
    status: "Inactive",
  },
];

export const columns = [
  {
    accessorFn: (row) => row.subAgentCode ?? "",
    id: "subAgentCode",
    cell: (info) => info.getValue(),
    header: () => <span>Sub Agent Code</span>,
  },
  {
    accessorFn: (row) => row?.subAgentName ?? "",
    id: "subAgentName",
    cell: (info) => info.getValue(),
    header: () => <span>Sub Agent Name</span>,
  },
  {
    accessorFn: (row) => row.phoneNo ?? "",
    id: "phoneNo",
    cell: (info) => info.getValue(),
    header: () => <span>Phone no.</span>,
  },
  {
    accessorFn: (row) => row?.regDate ?? "",
    id: "regDate",
    cell: (info) => info.getValue(),
    header: () => <span>Reg. Date</span>,
  },
  {
    accessorFn: (row) => row?.edit ?? "",
    id: "edit",
    cell: (info) => info.getValue(),
    header: () => <span>Edit</span>,
  },
  {
    accessorFn: (row) => row?.status ?? "",
    id: "status",
    cell: (info) => {
      return (
        <Button
          variant="contained"
          sx={{
            width: "95px",
            boxShadow:"none" ,
            color: `${
              info.getValue() === "Active"
                ? "#2D943D"
                : info.getValue() === "Inactive"
                ? "#f70000"
                : ""
            }`,
            backgroundColor: `${
              info.getValue() === "Active"
                ? "#d3f5d8"
                : info.getValue() === "Inactive"
                ? "#f7acac"
                : ""
            }`,
            "&:hover": {
              boxShadow:"none" ,
              backgroundColor: `${
                info.getValue() === "Active"
                  ? "#d3f5d8"
                  : info.getValue() === "Inactive"
                  ? "#f7acac"
                  : ""
              }`,
            },
            fontSize: "12px",
            fontWeight: "500",
            textTransform: "capitalize",
          }}
        >
          {info.getValue()}
        </Button>
      );
    },
    header: () => <span>Status</span>,
  },
];