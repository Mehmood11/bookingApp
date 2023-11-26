"use client"
import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import DashboardCard from "@/components/dashboard-card";
import revenue from "../../../assets/images/revenue.svg";
import earning from "../../../assets/images/earning.svg";
import totalBooking from "../../../assets/images/total-booking.svg";
import todayBooking from "../../../assets/images/today-booking.svg";
import dashboardCardOne from "../../../assets/images/dashboardCardOne.svg";
import dashboardCardTwo from "../../../assets/images/dashboardCardTwo.svg";
import dashboardCardThree from "../../../assets/images/dashboardCardThree.svg";
import dashboardCardFour from "../../../assets/images/dashboardCardFour.svg";
import CustomTable from "@/components/custom-table";

const cardData = [
  {
    id: 1,
    title: "Revenue",
    amount: "12",
    backgroundImage: dashboardCardOne,
    src: revenue,
  },
  {
    id: 2,
    title: "Earning",
    amount: "12",
    backgroundImage: dashboardCardTwo,
    src: earning,
  },
  {
    id: 3,
    title: "Total Bookings",
    amount: "12",
    backgroundImage: dashboardCardThree,
    src: totalBooking,
  },
  {
    id: 4,
    title: "Today Bookings",
    amount: "12",
    backgroundImage: dashboardCardFour,
    src: todayBooking,
  },
];


const TableData = [
  {
    accessorFn: (row) => row.title,
    id: "title",
    cell: (info) => (
      <Box display={"flex"} justifyContent={"flex-start"}>
        {info.getValue()}
      </Box>
    ),
    header: () => (
      <Box
        width={"100%"}
        ml={2}
        display={"flex"}
        justifyContent={"flex-start"}
      >
        Name (Email Address)
      </Box>
    ),
  },
]

const columns = [
  {
    accessorFn: (row) => row.childName ?? "-",
    id: "childName",
    cell: (info) => info.getValue(),
    header: () => <span>Child Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row) => row.dateTime ?? "-",
    id: "occurance",
    cell: (info) => {
      return <Box>MM/DD/YYYY</Box>;
    },
    header: () => <span>Date/Time of Occurance</span>,
    isSortable: true,
  },
  {
    accessorFn: (row) => row.status ?? "-",
    id: "childStatus",
    cell: (info) => info.getValue(),
    header: () => <span>Child Status</span>,
    isSortable: true,
  },
  {
    accessorFn: (row) => row?.createdAt ?? "-",
    id: "createdDate",
    cell: (info) => {
      return <Box>"MM/DD/YYYY"</Box>;
    },
    header: () => <span>Created Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row) => row?.createdBy ?? "-",
    id: "createdBy",
    cell: (info) => info.getValue(),
    header: () => <span>Created By</span>,
    isSortable: true,
  },

];



const SuperAdmin = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {cardData.map((item) => (
          <Grid item xs={3}>
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

      

      <CustomTable
        columns={columns}
        data={TableData}
        isFetching={false}
        isError={false}
        isSuccess
      />
    </Box>
  );
};

export default SuperAdmin;
