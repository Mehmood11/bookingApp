import { Grid, Typography, Box, Divider } from "@mui/material";
import React from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import RHFAutoCompleteAsync from "../rhf/rhf-auto-complete-async";
import { useLazyUsersQuery } from "@/services/flight-service-api/flight-service-api";
import RHFRadioGroup from "../rhf/rhf-radio-group";
import Image from "next/image";
import departure from "../../assets/search-flight/departure.svg";
import cloud from "../../assets/search-flight/cloud.svg";
import premium from "../../assets/search-flight/premium.svg";
import returnIcon from "../../assets/search-flight/return.svg";
import classes from "../../assets/search-flight/class.svg";
import calender from "../../assets/search-flight/calender.svg";
import RHFDatePicker from "../rhf/rhf-date-picker";
import dayjs from "dayjs";
import { RHFCheckbox } from "../rhf/rhf-checkbox";

const OneWay = ({ watch, getValues }) => {
  const apiQuery = useLazyUsersQuery();
  console.log("from ", watch("from"));
  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Grid xs={12} item sx={{ color: "black" }}>
        <RHFRadioGroup
          name="ways"
          options={[
            { label: "One Way", value: "oneWay" },
            { label: "Round Way", value: "roundWay" },
            { label: "Multi City", value: "multiCity" },
          ]}
        />
      </Grid>
      <Grid xs={12} md={3} item sx={{ color: "black" }}>
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          From
        </Typography>
        <Box
          sx={{
            backgroundColor: "#fff",
            boxShadow: " 0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(12px)",
            padding: "12px 30px",
            borderRadius: "8px",
          }}
        >
          <RHFAutoCompleteAsync
            name="from"
            queryKey="id"
            placeholder="From"
            apiQuery={apiQuery}
            getOptionLabel={(option) => option?.address?.city}
          />
          <Typography
            variant="body2"
            component="span"
            sx={{ fontWeight: "500" }}
          >
            DEL, Delhi Airport india
          </Typography>
        </Box>
      </Grid>

      <Grid
        xs={12}
        md={3}
        ml={1}
        item
        sx={{ color: "black", position: "relative" }}
      >
        <Box
          sx={{
            p: 1,
            borderRadius: "8px",
            backgroundColor: "#21608B",
            color: "white",
            textAlign: "center",
            display: "inline-block",
            position: "absolute",
            zIndex: 11,
            left: "-25px",
            top: "40px",
          }}
        >
          <SwapHorizIcon
            sx={{
              backgroundColor: "#21608B",
            }}
          />
        </Box>
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          To
        </Typography>
        <Box
          sx={{
            backgroundColor: "#fff",
            boxShadow: " 0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(12px)",
            padding: "12px 30px",
            borderRadius: "8px",
          }}
        >
          <RHFAutoCompleteAsync
            name="to"
            queryKey="id"
            placeholder="To"
            apiQuery={apiQuery}
            getOptionLabel={(option) => option?.address?.city}
          />
          <Typography
            variant="body2"
            component="span"
            sx={{ fontWeight: "500" }}
          >
            Indira Gandhi International airport
          </Typography>
        </Box>
      </Grid>
      <Divider orientation="vertical" sx={{ ml: 2 }} flexItem />
      <Grid container item xs={12} md={5} spacing={1} ml={2}>
        <Grid xs={12} md={4} item sx={{ color: "black" }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
              backdropFilter: "blur(12px)",
              padding: "12px 30px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            p={2}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Image src={departure} alt="departure" />
              Departure
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100px",
                  opacity: 0,
                  overFlow: "hidden",
                  backgroundColor: "red",
                }}
              >
                <RHFDatePicker
                  name="date"
                  fullWidth
                  sxProp={{
                    "& .MuiOutlinedInput-root": {
                      height: "100px",
                      mr: "2rem",
                      "& .MuiIconButton-root": {
                        height: "120px",
                        width: "200px",
                      },
                    },
                  }}
                />
              </Box>
              {/* <p>{watch("date").toLocaleString()}</p> */}
              <Typography variant="h2">
                {dayjs(watch("date").toLocaleString()).format("DD")}
              </Typography>
              <Box>
                <Typography variant="body1">
                  {" "}
                  {dayjs(watch("date").toLocaleString()).format("MMM")}
                </Typography>
                <Typography variant="body1">
                  {dayjs(watch("date").toLocaleString()).format("YYYY")}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={cloud} alt="cloud" />
              <Typography variant="body1" ml={1}>
                Friday
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={4} item sx={{ color: "black" }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
              backdropFilter: "blur(12px)",
              padding: "12px 30px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            p={2}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Image src={returnIcon} alt="return" />
              Return
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 1,
              }}
            >
              <Image src={calender} alt="calender" />
            </Box>
            <Typography variant="body2" sx={{ fontSize: "10px", m: 0, mt: 1 }}>
              Add a return date for bigger discount
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} md={4} item sx={{ color: "black" }} p={2}>
          <Box
            sx={{
              backgroundColor: "#fff",
              boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
              backdropFilter: "blur(12px)",
              padding: "12px 30px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            p={2}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Image src={classes} alt="class" />
              Class
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h2">14</Typography>
              <Box>
                <Typography variant="body1">SEP</Typography>
                <Typography variant="body1">2023</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={premium} alt="premium" />
              <Typography variant="body1" ml={1}>
                Premium
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid xs={12} item>
        <RHFCheckbox name='WHCR' label='WHCR'/>
        <RHFCheckbox name='agent' label='Agent Allocated Flight'/>
      </Grid>
    </Grid>
  );
};

export default OneWay;
