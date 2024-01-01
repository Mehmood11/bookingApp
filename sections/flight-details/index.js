"use client";
import React, { useState } from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  useTheme,
  Box,
} from "@mui/material";
import CustomChildRenderer from "./child-renderer";
//import CustomFlightStepper from "./custom-stepper";
import dynamic from "next/dynamic";
import FlightDetailsSideBar from "@/sections/flight-details/flight-details-sidebar/flightDetailsSideBar";
import SelectFlight from "@/sections/flight-details/select-flight/selectFlight";
import BookingSummarySidbar from "@/sections/flight-details/booking-summary/bookingSummary";
import PassengerDetails from "./passenger-details/passengerDetails";
import SomeThingExtra from "./something-extra/someThingExtra";
import Payment from "./payment/payment";

const CustomFlightStepper = dynamic(() => import("./custom-stepper"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const steps = [
  "Search",
  "Select Flight",
  "Passenger Details",
  "Something Extra",
  "Payment",
];

const FlightDetails = () => {
  const [active, setActive] = useState(1);

  const nextStepHandler = () => {
    setActive(active < steps.length - 1 ? active + 1 : 0);
  };
  const previousStepHandler = () => {
    setActive(active > 0 ? active - 1 : 0);
  };

  const theme = useTheme();
  return (
    <Grid container spacing={3}>
      <Grid item lg={3} md={4} xs={12}>
        <Box
          sx={{
            backgroundColor: "#f1f1f1",
            borderRadius: "12px",
            p: 3,
            boxSizing: "border-box",
            color: "#465365",
            border: "1px solid #FFF",
            background:
              "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
            boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(12px)",
            height: "100%",
          }}
        >
          {active === 1 ? <FlightDetailsSideBar /> : <BookingSummarySidbar />}
        </Box>
      </Grid>
      <Grid item lg={9} md={8} xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            background:
              "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
            boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(12px)",
            borderRadius: "12px",
            width: "100%",
            p: 5,
            maxHeight: "120px",
            overflowX: "auto",
            "& ::-webkit-scrollbar": {
              height: "5px !important",
            },
            "& ::-webkit-scrollbar-thumb": {
              backgroundColor: "primary.main",
              borderRadius: "12px",
            },
          }}
        >
          <CustomFlightStepper active={active} steps={steps} />
        </Box>
        <Box
          sx={{
            marginTop: 3,
            height: "auto",
            background:
              "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
            boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(12px)",
            borderRadius: "12px",
            p: 2,
            "& ::-webkit-scrollbar": {
              width: "9px",
            },
            "& ::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main,
              borderRadius: "6px",
            },
          }}
        >
          <CustomChildRenderer index={active}>
            <p>Comp 1</p>
            <SelectFlight nextStepHandler={nextStepHandler} />
            <PassengerDetails nextStepHandler={nextStepHandler} />
            <SomeThingExtra nextStepHandler={nextStepHandler} />
            <Payment />
          </CustomChildRenderer>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FlightDetails;
