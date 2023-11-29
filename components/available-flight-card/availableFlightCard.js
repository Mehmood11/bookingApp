"use client";
import React from "react";
import { Box, Button, Grid, LinearProgress, styled } from "@mui/material";
import FlightName from "../../assets/search-flight/Airline.png";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import CircleIcon from "@mui/icons-material/Circle";

const AvailableFlightCard = ({nextStepHandler}) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const progressBarData = [
    {
      title: "Non Refundable and non chargeable",
    },
    {
      title: "Standard Seat",
    },
    {
      title: "1 x 7 kg Cabin bag & 1 x 30kg Check-In bag",
    },
    {
      title: "Meal Choice -Veg/ Non Veg",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {[1, 2, 3, 4].map((item) => {
        return (
          <Box
            sx={{
              borderRadius: "12px",
              border: "1px solid #F8FAFC",
              background: "#FFF",
              boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
              backdropFilter: "blur(12px)",
              padding: "20px",
            }}
          >
            <Grid
              sx={{ display: "flex", alignItems: "center" }}
              container
              spacing={2}
            >
              <Grid item xs={12} md={2.4}>
                <img src={FlightName.src} alt="flightname" />
              </Grid>

              <Grid item xs={12} md={2.4}>
                <Box
                  sx={{
                    borderRadius: "12px",
                    border: "1px solid #FFF",
                    background:
                      "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
                    boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
                    backdropFilter: "blur(12px)",
                    padding: "10px",
                  }}
                >
                  <Box
                    sx={{
                      color: "#94A3B8",
                      fontSize: "14px",
                      fontWeight: 400,
                      mb: "1rem",
                    }}
                  >
                    28/11/2023
                  </Box>
                  <Box
                    sx={{
                      color: "#23A2DE",
                      fontSize: "20px",
                      fontWeight: 600,
                      mb: "8px",
                    }}
                  >
                    MXP, 11:30
                  </Box>
                  <Box>Malpensa Airport, Italy</Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "4px",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#465365",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      02h 56m
                    </Box>
                    <Box
                      sx={{
                        color: "#23A2DE",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Non Stop
                    </Box>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={50} />
                  <Box>
                    {progressBarData.map((item, i) => {
                      return (
                        <Box
                          sx={{
                            color: "#EF5C5D",
                            fontSize: "10px",
                            fontWeight: 400,
                            lineHeight: "normal",
                            display: "flex",
                            alignItems: "center",
                            marginY: 0.8,

                          }}
                        >
                          <span>
                            <CircleIcon sx={{ width: "6px", height: "6px", marginRight:0.5 }} />
                          </span>
                          {item.title}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={2.4}>
                <Box
                  sx={{
                    borderRadius: "12px",
                    border: "1px solid #FFF",
                    background:
                      "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
                    boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
                    backdropFilter: "blur(12px)",
                    padding: "10px",
                  }}
                >
                  <Box
                    sx={{
                      color: "#94A3B8",
                      fontSize: "14px",
                      fontWeight: 400,
                      mb: "1rem",
                    }}
                  >
                    28/11/2023
                  </Box>
                  <Box
                    sx={{
                      color: "#23A2DE",
                      fontSize: "20px",
                      fontWeight: 600,
                      mb: "8px",
                    }}
                  >
                    MXP, 11:30
                  </Box>
                  <Box>Malpensa Airport, Italy</Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={1.4}>
                <Box>
                  <Box
                    sx={{
                      color: "#00A885",
                      fontSize: "32px",
                      fontWeight: 600,
                    }}
                  >
                    $52.92
                  </Box>
                  <Button
                    sx={{
                      borderRadius: "10px",
                      background: "rgba(235, 51, 52, 0.80)",
                      boxShadow: "0px 14px 28px -10px rgba(237, 76, 78, 0.60)",
                      color: "#FFF",
                      fontSize: "14px",
                      fontWeight: 500,
                      "&:hover": {
                        background: "rgba(235, 51, 52, 0.80)",
                        boxShadow:
                          "0px 14px 28px -10px rgba(237, 76, 78, 0.60)",
                      },
                    }}
                    variant="contained"
                    onClick={nextStepHandler}
                  >
                    Book Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default AvailableFlightCard;
