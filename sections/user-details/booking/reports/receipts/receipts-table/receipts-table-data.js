export const TableData = [
    {
      id: 1,
      transactionNo: "76.98$",
      transactionDate: "76.98$",
      transactionType: "76.98$",
      amount: "76.98$",
      settleAmount: "76.98$",
      remark: "76.98$",
      details: "76.98$",

    },
  ];
  
  export const columns = [
    {
      accessorFn: (row) => row.transactionNo,
      id: "transactionNo",
      cell: (info) => info.getValue(),
      header: () => <span>Transaction No</span>,
    },
    {
      accessorFn: (row) => row.transactionDate,
      id: "transactionDate",
      cell: (info) => info.getValue(),
      header: () => <span>Transaction Date</span>,
    },
    {
      accessorFn: (row) => row.transactionType,
      id: "transactionType",
      cell: (info) => info.getValue(),
      header: () => <span>Transaction Type</span>,
    },
    {
      accessorFn: (row) => row.amount,
      id: "amount",
      cell: (info) => info.getValue(),
      header: () => <span>Amount</span>,
    },
    {
      accessorFn: (row) => row.settleAmount,
      id: "settleAmount",
      cell: (info) => info.getValue(),
      header: () => <span>Settle-Amount</span>,
    },
    {
      accessorFn: (row) => row.remark,
      id: "remark",
      cell: (info) => info.getValue(),
      header: () => <span>remark</span>,
    },
    {
      accessorFn: (row) => row.details,
      id: "details",
      cell: (info) => info.getValue(),
      header: () => <span>Details</span>,
    },
  ];
  