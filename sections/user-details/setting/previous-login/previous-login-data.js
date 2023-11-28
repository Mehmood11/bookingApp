import { Button } from "@mui/material";

export const TableData = [
  {
    id: 1,
    srNo: "1",
    date: "25 Sep 2023",
    ip: "37182812",
  },
];

export const columns = [
  {
    accessorFn: (row) => row.srNo ?? "",
    id: "srNo",
    cell: (info) => info.getValue(),
    header: () => <span>Sr. No</span>,
  },
  {
    accessorFn: (row) => row.date ?? "",
    id: "date",
    cell: (info) => info.getValue(),
    header: () => <span>Date</span>,
  },
  {
    accessorFn: (row) => row?.ip ?? "",
    id: "ip",
    cell: (info) => info.getValue(),
    header: () => <span>IP</span>,
  },
  {
    accessorFn: (row) => "",
    id: "view",
    cell: (info) => {
      return <Button>View</Button>;
    },
    header: () => <span></span>,
  },
];
