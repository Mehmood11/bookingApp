"use client";
export const TableData = [
  {
    id: 1,
    serviceType: "serviceType",
    bookingNo: "BK3663",
    bookingDate: "BK3663",
    agentVoucherNo: "Baljeet Kaur",
    passengerName: "663",
    checkIn: "76.98$",
    amount: "76.98$",
    UserName: "In Process",
    view: "In Process",
  },
];

export const columns = [
  {
    accessorFn: (row) => row.serviceType ?? "",
    id: "serviceType",
    cell: (info) => info.getValue(),
    header: () => <span>Service Type</span>,
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
    accessorFn: (row) => row?.agentVoucherNo ?? "",
    id: "agentVoucherNo",
    cell: (info) => info.getValue(),
    header: () => <span>Agent Voucher No</span>,
  },
  {
    accessorFn: (row) => row?.passengerName ?? "",
    id: "passengerName",
    cell: (info) => info.getValue(),
    header: () => <span>Passenger Name</span>,
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
    accessorFn: (row) => row?.UserName ?? "",
    id: "UserName",
    cell: (info) => info.getValue(),
    header: () => <span>User Name</span>,
  },
  {
    accessorFn: (row) => row?.view ?? "",
    id: "view",
    cell: (info) => info.getValue(),
    header: () => <span>View</span>,
  },
];
