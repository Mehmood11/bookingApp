import {
  Grid,
  Typography,
  Box,
  Divider,
  Menu,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
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
import CustomModal from "../custom-modal/customModal";
import MultiButtons from "../multi-buttons";

const OneWay = ({ watch, getValues, pageName }) => {
  const apiQuery = useLazyUsersQuery();
  console.log("from ", watch("from"));

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleButtonChange = (slectButton) => {
    console.log(slectButton);
  };

  return (
    <Grid container sx={{ alignItems: "center", mt: 2 }}>
      <CustomModal open={open} setOpen={setOpen} />
      <Grid xs={12} item sx={{ color: "black" }}>
        {pageName === "selectFlight" ? (
          <RHFRadioGroup
            name="ways"
            options={[
              { label: "One Way", value: "oneWay" },
              { label: "Round Way", value: "roundWay" },
              { label: "Multi City", value: "multiCity" },
            ]}
          />
        ) : (
          <Box
            sx={{
              top: -25,
              position: "-webkit-absolute",
              position:"absolute",
            }}
          >
            <MultiButtons
              name="ways"
              options={[
                { label: "One Way", value: "oneWay" },
                { label: "Round Way", value: "roundWay" },
                { label: "Multi City", value: "multiCity" },
              ]}
              onSelect={handleButtonChange}
            />
          </Box>
        )}
      </Grid>
      <Grid xs={12} lg={3} item sx={{ color: "black" }}>
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
        lg={3}
        ml={{ lg: 1, xs: 0 }}
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
            left: { lg: "-25px", xs: "0px" },
            top: { lg: "40px", xs: "10%" },
            right: 0,
            margin: { xs: "auto", lg: "0" },
            transform: { xs: "translateY(-50%)", lg: "none" },
            width: "40px",
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
            DEL, Delhi Airport india
          </Typography>
        </Box>
      </Grid>
      <Divider
        orientation="vertical"
        sx={{ ml: 2, display: { xs: "none", lg: "inline-block" } }}
        flexItem
      />
      <Grid
        container
        item
        xs={12}
        lg={5}
        columnSpacing={2}
        spacing={1}
        mt={{ xs: 2, lg: 0 }}
        ml={{ xs: 0, lg: 2 }}
      >
        <Grid xs={12} sm={4} item sx={{ color: "black" }}>
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
              <Typography variant="h2" color={"#4A9CE9"}>
                {/* {dayjs(watch("date")?.toLocaleString()).format("DD")} */}
                01
              </Typography>
              <Box>
                <Typography variant="body1">
                  {" "}
                  {/* {dayjs(watch("date")?.toLocaleString()).format("MMM")} */}
                  dec
                </Typography>
                <Typography variant="body1">
                  {/* {dayjs(watch("date")?.toLocaleString()).format("YYYY")} */}
                  2023
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
        <Grid xs={12} sm={4} item sx={{ color: "black" }}>
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
              cursor: "pointer",
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
              }}
            >
              {/* <Image src={calender} alt="calender" /> */}
              <Typography variant="h2" color={"#4A9CE9"}>
                {/* {dayjs(watch("date")?.toLocaleString()).format("DD")} */}
                06
              </Typography>
              <Box>
                <Typography variant="body1">
                  {" "}
                  {/* {dayjs(watch("date")?.toLocaleString()).format("MMM")} */}
                  dec
                </Typography>
                <Typography variant="body1">
                  {/* {dayjs(watch("date")?.toLocaleString()).format("YYYY")} */}
                  2023
                </Typography>
              </Box>
            </Box>
            <Typography variant="body4" sx={{ fontSize: "10px" }}>
              Add a return date for bigger discount
            </Typography>
          </Box>
        </Grid>

        <Grid xs={12} sm={4} item sx={{ color: "black" }}>
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
              cursor: "pointer",
            }}
            p={2}
            onClick={handleClickOpen}
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
              <Typography variant="h2" color={"#4A9CE9"}>
                1
              </Typography>
              <Box>
                <Typography variant="body1">Traveller</Typography>
                <Typography variant="body1">Economy</Typography>
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
      {/* <Grid xs={12} item>
        <RHFCheckbox name="WHCR" label="WHCR" />
        <RHFCheckbox name="agent" label="Agent Allocated Flight" />
      </Grid> */}
    </Grid>
  );
};

export default OneWay;
