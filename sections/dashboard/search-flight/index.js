"use client";
import FormProvider from "@/components/rhf/form-provider";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import profileIcon from "../../../assets/profileIcon.svg";
import passportNo from "../../../assets/passportNo.svg";
import ticket from "../../../assets/ticket.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import RHFTextField from "@/components/rhf/rhf-textfield";
import CustomTabs from "@/components/custom-tabs/customTabs";
import OneWay from "@/components/one-way";
import Header from "@/layout/dashboard-layout/header";
const SearchFlight = () => {
  const methods = useForm({
    defaultValues: {
      ticket: "",
      passportNum: "",
      passengerName: "",
      from: null,
      to: null,
    },
  });

  const { watch } = methods;
  return (
    <FormProvider methods={methods}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          height: "100%",
          alignItems: "flex-start",
          alignContent: "center",
        }}
      >
        <Grid item xs={12}>
        <Header />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ maxWidth: "550px" }}>
            <Typography variant="h4" component="span" sx={{ color: "#EB3334" }}>
              Explore
            </Typography>{" "}
            the World's Wonders From Any Location , Anytime!
          </Typography>
        </Grid>
        <Grid item xs={12} container rowSpacing={2} columnGap={2}>
          <Grid item xs={12} md={3}>
            <RHFTextField
              name="ticket"
              placeholder="Enter PNR or ticket no"
              outerLabel="PNR / Ticket No"
              StartIcon={<Image src={ticket} alt="ticket" />}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <RHFTextField
              name="passportNum"
              placeholder="Enter Passport no"
              outerLabel="Passport No"
              StartIcon={<Image src={passportNo} alt="passportNo" />}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <RHFTextField
              name="passengerName"
              placeholder="Enter passenger no"
              outerLabel="Passenger Name"
              StartIcon={<Image src={profileIcon} alt="ticket" />}
            />
          </Grid>
          <Grid item xs={12} md={2} display={"flex"} alignItems={"flex-end"}>
            <Button
              variant="contained"
              mt={2}
              sx={{
                height: "55px",
                borderRadius: "0.8125rem",
                backgroundColor: "#EB3334",
                // mb: 0.5,
                "&:hover": {
                  backgroundColor: "#EB3334",
                },
              }}
            >
              <ArrowForwardIosIcon />
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: 6,
              minHeight: "14rem",
              borderRadius: " 0.75rem",
              background:
                "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
              boxShadow: " 0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            <CustomTabs
              tabStyle={{
                position: "fixed",
                top: "-1.5rem",
                width: "100%",
              }}
              tabsArray={["One Way", "Round Way"]}
            >
              <OneWay watch={watch} />
            </CustomTabs>
          </Grid>
          <Grid
            item
            xs={12}
            mt={1}
            sx={{
              borderRadius: " 0.75rem",
              background:
                "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
              boxShadow: " 0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            Footer
          </Grid>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default SearchFlight;
