import revenue from "../../assets/images/revenue.svg";
import earning from "../../assets/images/earning.svg";
import totalBooking from "../../assets/images/total-booking.svg";
import todayBooking from "../../assets/images/today-booking.svg";
import dashboardCardOne from "../../assets/images/dashboardCardOne.svg";
import dashboardCardTwo from "../../assets/images/dashboardCardTwo.svg";
import dashboardCardThree from "../../assets/images/dashboardCardThree.svg";
import dashboardCardFour from "../../assets/images/dashboardCardFour.svg";
import turkishAirline from "../../assets/images/turkish-airline.svg";
import americanAirline from "../../assets/images/american-airline.svg";
import southAirline from "../../assets/images/southwest-airline.svg";
import EastIcon from '@mui/icons-material/East';
import Image from "next/image";
import { Box, Button } from "@mui/material";

export const cardData = [
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
  
  
  export const TableData = [
    {
      id: 1,
      airLine: turkishAirline,
      bookingId: "BK3663",
      destination: <Box sx={{display:"flex", alignItems:"center"}}> BGY <EastIcon fontSize="12px" /> ATQ </Box>,
      leadpax: "Baljeet Kaur",
      departureDate: "12/12/23",
      agentName: "Baljeet Kaur",
      total: "76.98$",
      status: "In Process",
      bookingDate: "02/07/2022",
    },
    {
      id: 2,
      airLine: americanAirline,
      bookingId: "BK3663",
      destination: <Box sx={{display:"flex", alignItems:"center"}}> BGY <EastIcon fontSize="12px" /> ATQ </Box>,
      leadpax: "Baljeet Kaur",
      departureDate: "12/12/23",
      agentName: "Baljeet Kaur",
      total: "76.98$",
      status: "Conform",
      bookingDate: "02/07/2022",
    },
    {
      id: 3,
      airLine: southAirline,
      bookingId: "BK3663",
      destination: <Box sx={{display:"flex", alignItems:"center"}}> BGY <EastIcon fontSize="12px" /> ATQ </Box>,
      leadpax: "Baljeet Kaur",
      departureDate: "12/12/23",
      agentName: "Baljeet Kaur",
      total: "76.98$",
      status: "Rejected",
      bookingDate: "02/07/2022",
    },
    {
      id: 4,
      airLine: southAirline,
      bookingId: "BK3663",
      destination: <Box sx={{display:"flex", alignItems:"center"}}> BGY <EastIcon fontSize="12px" /> ATQ </Box>,
      leadpax: "Baljeet Kaur",
      departureDate: "12/12/23",
      agentName: "Baljeet Kaur",
      total: "76.98$",
      status: "Pending",
      bookingDate: "02/07/2022",
    },
  ]
  
  export  const columns = [
    {
      accessorFn: (row) => row.airLine ?? "",
      id: "airLine",
       cell: (info) => {
        return <Image src={(info.getValue())} alt="Airline"/>;
      },
      header: () => <span>Air Line</span>,
    },
    {
      accessorFn: (row) => row.bookingId ?? "",
      id: "bookingId",
      cell: (info) => info.getValue(),
      header: () => <span>Booking Id</span>,
    },
    {
      accessorFn: (row) => row.destination ?? "",
      id: "destination",
      cell: (info) => info.getValue(),
      header: () => <span>Destination</span>,
    },
    {
      accessorFn: (row) => row?.leadpax ?? "",
      id: "leadpax",
      cell: (info) => info.getValue(),
      header: () => <span>Leadpax</span>,
    },
    {
      accessorFn: (row) => row?.departureDate ?? "",
      id: "departureDate",
      cell: (info) => info.getValue(),
      header: () => <span>Departure Date</span>,
    },
    {
      accessorFn: (row) => row?.agentName ?? "",
      id: "agentName",
      cell: (info) => info.getValue(),
      header: () => <span>Agent Name</span>,
    },
    {
      accessorFn: (row) => row?.total ?? "",
      id: "total",
      cell: (info) => info.getValue(),
      header: () => <span>Total</span>,
    },
    {
      accessorFn: (row) => row?.status ?? "",
      id: "status",
      cell: (info) => {
        return <Button variant="contained" sx={{
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
        }}>{(info.getValue())}</Button>;
      },
      header: () => <span>Status</span>,
    },
    {
      accessorFn: (row) => row?.bookingDate ?? "",
      id: "bookingDate",
      cell: (info) => info.getValue(),
      header: () => <span>Booking Date</span>,
    },
  
  ];
  