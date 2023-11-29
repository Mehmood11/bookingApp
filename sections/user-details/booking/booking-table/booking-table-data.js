import turkishAirline from "../../../../assets/images/turkish-airline.svg";
import { Button } from "@mui/material";
import Image from "next/image";

export const TableData = [
  {
    id: 1,
    srNo: 1,
    serviceType: "serviceType",
    agency: "Baljeet Kaur",
    bookingId: "BK3663",
    ticketNo: "BK3663",
    pnr: "663",
    channel: "76.98$",
    paxType: "76.98$",
    passengerName: "In Process",
    status: "In Process",
    airLine: turkishAirline,
    sectc: "sectc",
  },
];

export const columns = [
  {
    accessorFn: (row) => row.srNo,
    id: "srNo",
    cell: (info) => info.getValue(),
    header: () => <span>No</span>,
  },
  {
    accessorFn: (row) => row.serviceType ?? "",
    id: "serviceType",
    cell: (info) => info.getValue(),
    header: () => <span>Service Type</span>,
  },
  {
    accessorFn: (row) => row?.agency ?? "",
    id: "agency",
    cell: (info) => info.getValue(),
    header: () => <span>Agency</span>,
  },
  {
    accessorFn: (row) => row.bookingId ?? "",
    id: "bookingId",
    cell: (info) => info.getValue(),
    header: () => <span>Booking ID</span>,
  },
  {
    accessorFn: (row) => row.ticketNo ?? "",
    id: "ticketNo",
    cell: (info) => info.getValue(),
    header: () => <span>Ticket No</span>,
  },
  {
    accessorFn: (row) => row?.pnr ?? "",
    id: "pnr",
    cell: (info) => info.getValue(),
    header: () => <span>PNR</span>,
  },
  {
    accessorFn: (row) => row?.channel ?? "",
    id: "channel",
    cell: (info) => info.getValue(),
    header: () => <span>Channel</span>,
  },
  {
    accessorFn: (row) => row?.paxType ?? "",
    id: "paxType",
    cell: (info) => info.getValue(),
    header: () => <span>PAX Type</span>,
  },
  {
    accessorFn: (row) => row?.passengerName ?? "",
    id: "passengerName",
    cell: (info) => info.getValue(),
    header: () => <span>Passenger Name</span>,
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
            backgroundColor: `${
              info.getValue() === "Rejected"
                ? "#ff0000"
                : info.getValue() === "Conform"
                ? "#40c79a"
                : info.getValue() === "In Process"
                ? "#629bf8"
                : "#f7b13c" // Pending Color
            }`,
            "&:hover": {
              backgroundColor: `${
                info.getValue() === "Rejected"
                  ? "#ff0000" // Red
                  : info.getValue() === "Conform"
                  ? "#40c79a" // Green
                  : info.getValue() === "In Process"
                  ? "#629bf8" // Blue
                  : "#f7b13c" // Pending
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
    header: () => <span>Booking Status</span>,
  },
  {
    accessorFn: (row) => row?.airLine ?? "",
    id: "airLine",
    cell: (info) => {
      return <Image src={info.getValue()} alt="Airline" />;
    },
    header: () => <span>AirLine</span>,
  },
  {
    accessorFn: (row) => row?.sectc ?? "",
    id: "sectc",
    cell: (info) => info.getValue(),
    header: () => <span>SECTS</span>,
  },
];
