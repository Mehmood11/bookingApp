import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import RHFAutoCompleteAsync from "../rhf/rhf-auto-complete-async";
import { useLazyUsersQuery } from "@/services/flight-service-api/flight-service-api";
const OneWay = ({ watch }) => {
  const apiQuery = useLazyUsersQuery();
  console.log("from ", watch("from"));
  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Grid xs={12} md={3} item sx={{ color: "black" }}>
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          From
        </Typography>
        <Box
          sx={{
            backgroundColor: "#fff",
            boxShadow: " 0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(12px)",
            padding: 1.8,
            borderRadius: "8px",
          }}
        >
          {/* <Typography variant="h5" component="p" sx={{ fontWeight: "bold" }}>
            {watch("from")?.address?.city}
          </Typography> */}
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
      <Box
        sx={{
          p: 1,
          borderRadius: "8px",
          backgroundColor: "#21608B",
          color: "white",
          textAlign: "center",
        }}
      >
        <SwapHorizIcon
          sx={{
            backgroundColor: "#21608B",
          }}
        />
      </Box>
      <Grid xs={12} md={3} ml={1} item sx={{ color: "black" }}>
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          To
        </Typography>
        <Box
          sx={{
            backgroundColor: "#fff",
            boxShadow: " 0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(12px)",
            padding: 1.8,
            borderRadius: "8px",
          }}
        >
          {/* <Typography variant="h5" component="p" sx={{ fontWeight: "bold" }}>
            Mumbai
          </Typography> */}
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
    </Grid>
  );
};

export default OneWay;
