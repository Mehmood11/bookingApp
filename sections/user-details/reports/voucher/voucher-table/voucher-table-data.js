"use client"
export const TableData = [
  {
    id: 1,
    srNo: 1,
    bookingNo: "BK3663",
    bookingDate: "BK3663",
    passengerName: "663",
    service: "service",
    checkIn: "76.98$",
    amount: "76.98$",
    agent: "Baljeet Kaur",
    status: "In Process",
  },
];

export const columns = [
  {
    accessorFn: (row) => row.srNo,
    id: "srNo",
    cell: (info) => info.getValue(),
    header: () => <span>Sr No</span>,
  },

  {
    accessorFn: (row) => row.bookingNo ?? "",
    id: "bookingNo",
    cell: (info) => info.getValue(),
    header: () => <span>Booking No</span>,
  },
  {
    accessorFn: (row) => row.bookingDate ?? "",
    id: "bookingDate",
    cell: (info) => info.getValue(),
    header: () => <span>Booking Date</span>,
  },
  {
    accessorFn: (row) => row?.passengerName ?? "",
    id: "passengerName",
    cell: (info) => info.getValue(),
    header: () => <span>Passenger Name</span>,
  },
  {
    accessorFn: (row) => row.service ?? "",
    id: "service",
    cell: (info) => info.getValue(),
    header: () => <span>Service</span>,
  },
  {
    accessorFn: (row) => row?.checkIn ?? "",
    id: "checkIn",
    cell: (info) => info.getValue(),
    header: () => <span>Check In</span>,
  },
  {
    accessorFn: (row) => row?.amount ?? "",
    id: "amount",
    cell: (info) => info.getValue(),
    header: () => <span>Amount</span>,
  },
  {
    accessorFn: (row) => row?.agent ?? "",
    id: "agent",
    cell: (info) => info.getValue(),
    header: () => <span>Agt/Sub</span>,
  },
  {
    accessorFn: (row) => row?.status ?? "",
    id: "status",
    cell: (info) => info.getValue(),
    header: () => <span>Status</span>,
  },
];
