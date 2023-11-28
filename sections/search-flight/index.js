"use client";
import FormProvider from "@/components/rhf/form-provider";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import profileIcon from "../../assets/profileIcon.svg";
import passportNo from "../../assets/passportNo.svg";
import ticket from "../../assets/ticket.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import RHFTextField from "@/components/rhf/rhf-textfield";
import CustomTabs from "@/components/custom-tabs/customTabs";
import OneWay from "@/components/one-way";
import Header from "@/layout/dashboard-layout/header";
import dynamic from "next/dynamic";

const DifferentWay = dynamic(() => import("@/components/one-way"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const SearchFlight = () => {
  const methods = useForm({
    defaultValues: {
      ticket: "",
      passportNum: "",
      passengerName: "",
      from: null,
      to: null,
      ways: "",
      date: new Date(),
      WHCR: true,
      agent: false,
    },
  });

  const { watch, getValues } = methods;
  return (
    <FormProvider methods={methods}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          height: "100%",
          alignItems: "flex-start",
          alignContent: "flex-start",
          paddingX: 6,
        }}
      >
        {/* <Grid item xs={12}>
          <Header />
        </Grid> */}
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 600, color: "white" }} variant="h3">
            {/* <Typography variant="h2" component="span" sx={{ color: "#EB3334" }}>
              Explore
            </Typography>{" "} */}
            Explore the World's Wonders From <br /> Any Location , Anytime!
          </Typography>
        </Grid>
        <Grid mt={4} item xs={12} container rowSpacing={2} columnGap={2}>
          <Grid item xs={12} md={3}>
            <RHFTextField
              name="ticket"
              placeholder="Enter PNR or ticket no"
              outerLabel="PNR / Ticket No"
              StartIcon={<Image src={ticket} alt="ticket" />}
              color="white"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <RHFTextField
              name="passportNum"
              placeholder="Enter Passport no"
              outerLabel="Passport No"
              StartIcon={<Image src={passportNo} alt="passportNo" />}
              color= 'white'
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <RHFTextField
              name="passengerName"
              placeholder="Enter passenger no"
              outerLabel="Passenger Name"
              StartIcon={<Image src={profileIcon} alt="ticket" />}
              color= 'white'
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
              mt: 3,
              minHeight: "14rem",
              borderRadius: " 0.75rem",
              background:
                "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
              boxShadow: " 0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
              backdropFilter: "blur(12px)",
              p: 2,
            }}
          >
            <DifferentWay watch={watch} getValues={getValues} />
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
