import React from "react";
import Grid from '@mui/material/Grid';
import DashboardCard from "@/components/dashboard-card";
import revenue from "../../../assets/images/revenue.svg";
import earning from "../../../assets/images/earning.svg";
import totalBooking from "../../../assets/images/total-booking.svg";
import todayBooking from "../../../assets/images/today-booking.svg";
import dashboardCard from "../../../assets/images/dashboardCard.svg";


const dashboard = [
  {
    id: 1,
    title: "Revenue",
    amount: "12",
    backgroundImage: dashboardCard,
    src: revenue,
  },
  {
    id: 2,
    title: "Earning",
    amount: "12",
    backgroundImage: dashboardCard,
    src: earning,
  },
  {
    id: 3,
    title: "Total Bookings",
    amount: "12",
    backgroundImage: dashboardCard,
    src: totalBooking,
  },
  {
    id: 4,
    title: "Today Bookings",
    amount: "12",
    backgroundImage: dashboardCard,
    src: todayBooking,
  },
];

const SuperAdmin = () => {
  return (
    <Grid container spacing={2}>
      {dashboard.map((item) => (
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
  );
};

export default SuperAdmin;
