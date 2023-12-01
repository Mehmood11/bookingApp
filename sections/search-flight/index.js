"use client";
import FormProvider from "@/components/rhf/form-provider";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import profileIcon from "../../assets/profileIcon.svg";
import passportNo from "../../assets/passportNo.svg";
import ticket from "../../assets/ticket.svg";
import smsIcon from "../../assets/search-flight/sms.svg";
import calling from "../../assets/search-flight/call-calling.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import RHFTextField from "@/components/rhf/rhf-textfield";
import dynamic from "next/dynamic";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/navigation";

const DifferentWay = dynamic(() => import("@/components/one-way"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const socialData = [
  {
    img: calling,
    name: "Phone",
    contact: "+11 22 3333 4444",
  },
  {
    img: smsIcon,
    name: "Email",
    contact: "info@makemytrip.com",
  },
  {
    img: smsIcon,
    name: "WhatsApp support",
    contact: "+11 22 3333 4444",
  },
];

const SearchFlight = () => {
  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      ticket: "",
      passportNum: "",
      passengerName: "",
      from: null,
      to: null,
      ways: "",
      date: new Date(12),
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
          paddingX: { xs: 0, md: 6 },
        }}
      >
        {/* <Grid item xs={12}>
          <Header />
        </Grid> */}
        <Grid item xs={12}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { sm: "3rem", xs: "2rem" },
              color: "white",
            }}
            variant="h3"
          >
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
              color="white"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <RHFTextField
              name="passengerName"
              placeholder="Enter passenger no"
              outerLabel="Passenger Name"
              StartIcon={<Image src={profileIcon} alt="ticket" />}
              color="white"
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
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                backgroundColor: "#EB3334",
                boxShadow: "0px 14px 28px -10px rgba(237, 76, 78, 0.60)",
                backdropFilter: "blur(7px)",
                fontSize: "18px",
                fontWeight: 500,
                mb: 0.5,
                p: "15px 30px",
                position: "absolute",
                textTransform: "capitalize",
                bottom: "-2rem",
                right: 30,
                "&:hover": {
                  backgroundColor: "#EB3334",
                  boxShadow: "0px 14px 28px -10px rgba(237, 76, 78, 0.60)",
                },
              }}
              onClick={() => router.push("/flight-details")}
            >
              Search Flight
              <KeyboardArrowRightIcon />
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                borderRadius: " 0.75rem",
                background:
                  "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
                boxShadow: " 0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
                backdropFilter: "blur(12px)",
                paddingX: "50px",
                paddingY: 3,
                mt: 5,
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={3} lg={3}>
                  <Box
                    sx={{ fontSize: "24px", fontWeight: 600, color: "#465365" }}
                  >
                    Looking For Help?
                  </Box>
                </Grid>

                {socialData.map((item, i) => {
                  return (
                    <Grid key={i} item xs={12} md={3} lg={3}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Box>
                          <img src={item.img.src} alt="sms" />
                        </Box>
                        <Box>
                          <Box
                            sx={{
                              fontSize: "14px",
                              fontWeight: 500,
                              color: "#64748B",
                            }}
                          >
                            {item.name}
                          </Box>
                          <Box
                            sx={{
                              fontSize: "14px",
                              fontWeight: 500,
                              color: "#64748B",
                            }}
                          >
                            {item.contact}
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default SearchFlight;
