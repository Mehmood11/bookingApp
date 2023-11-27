import { Box, Button, Divider, Stack } from "@mui/material";
import React from "react";
import SearchTrips from "./search-trips";
import BookingTable from "./booking-table";
import AdvanceBooking from "./advance-booking";

const Booking = () => {
  return (
    <Box>
      <SearchTrips />
      <Divider sx={{ mb: 4 }} />
      <AdvanceBooking />
      <Stack spacing={2} direction="row" justifyContent="end">
        <Button variant="outlined" size="large" sx={{color:"#64748B", fontWeight:"500", width:"200px" ,textTransform:"capitalize"}}>
        Cancellation Deadline
        </Button>
        <Button variant="contained" size="large" sx={{fontWeight:"500" , width:"200px" ,textTransform:"capitalize"}}>Booking Date</Button>
      </Stack>
      <Divider sx={{ my: 4 }} />
      <BookingTable />
    </Box>
  );
};

export default Booking;
