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
import CustomFlightStepper from "./custom-stepper";

const steps = [
  "Search",
  "Select Flight",
  "Passenger Details",
  "Something Extra",
  "Payment",
];

const FlightStepper = () => {
  const [active, setActive] = useState(1);

  const nextStepHandler = () => {
    setActive(active < steps.length - 1 ? active + 1 : 0);
  };
  const previousStepHandler = () => {
    setActive(active > 0 ? active - 1 : 0);
  };

  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        columnGap: "10px",
        boxSizing: "border-box",
        flexWrap: "nowrap",
        height: "100vh",
      }}
    >
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          backgroundColor: "#f1f1f1",
          borderRadius: "6px",
          p: 2,
          boxSizing: "border-box",
          color: "black",
        }}
      >
        Sidebar
      </Grid>
      <Grid
        item
        xs={12}
        md={9}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          rowGap: "10px",
        }}
      >
        <Grid
          item
          sm={12}
          sx={{
            backgroundColor: "#f1f1f1",
            borderRadius: "6px",
            width: "100%",
            p: 2,
            maxHeight: "15vh",

            "& ::-webkit-scrollbar": {
              height: "5px !important",
            },
            "& ::-webkit-scrollbar-thumb": {
              backgroundColor: "primary.main",
              borderRadius: "6px",
            },
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", lg: "inline-block" },
              overflowX: { xs: "scroll", lg: "auto" },
              width: "100%",
            }}
          >
            <CustomFlightStepper active={active} steps={steps} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          container
          sx={{
            height: "55vh",
            backgroundColor: "#f1f1f1",
            borderRadius: "6px",
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
          <Grid
            item
            sm={12}
            sx={{
              height: "100%",
              color: "black",
            }}
          >
            <CustomChildRenderer index={active}>
              <p>Comp 1</p>
              <p>Comp 2</p>
              <p>Comp 3</p>
              <p>Comp 4</p>
              <p>Comp 5</p>
            </CustomChildRenderer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FlightStepper;
