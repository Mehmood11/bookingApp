import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import SearchTrips from "./search-trips";
import BookingTable from "./booking-table";
import AdvanceBooking from "./advance-booking";

const Booking = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          color: "#2278C8",
          fontSize: "24px",
          fontWeight: "600",
          my:1
        }}
      >
        Booking
      </Typography>
      <SearchTrips />
      <Divider sx={{ mb: 2 }} />
      <AdvanceBooking />
      <Stack spacing={2} direction="row" justifyContent="end">
        <Button
          variant="outlined"
          size="large"
          sx={{
            color: "#64748B",
            fontWeight: "500",
            size: "large",
            width: "200px",
            borderRadius: "8px",
            textTransform: "capitalize",
          }}
        >
          Cancellation Deadline
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{
            fontWeight: "500",
            width: "200px",
            size: "large",
            borderRadius: "8px",
            textTransform: "capitalize",
          }}
        >
          Booking Date
        </Button>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <BookingTable />
    </Box>
  );
};

export default Booking;
