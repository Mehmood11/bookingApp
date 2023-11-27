import FormProvider from "@/components/rhf/form-provider";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { defaultValues, searchTripData } from "./advance-booking-data";


const AdvanceBooking = () => {
  const methods = useForm(
    defaultValues,
  );

  const { handleSubmit } = methods;

  const onSubmitHandler = (data) => {
    console.log(data);
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
    <Grid container rowSpacing={5} columnSpacing={10}>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h5"
          component="h5"
          sx={{ color: "#1E5E89", fonSize: "20px", fontWeight: "600" }}
        >
          Advance Booking Search
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ color: "#64748B", fonSize: "12px" }}
        >
          Lorem Ipsum is simply dummy text of the printing
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          {searchTripData?.map((form) => {
            return (
              <Grid item xs={12} md={6} lg={form?.gridLength} key={form?.id}>
                <>
                  <form.component size="small" {...form.otherOptions}>
                    {form.otherOptions.select
                      ? form.options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                </>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
    <Box sx={{textAlign:"end", my:4}}>
      <Button
        size="large"
        type="submit"
        variant="contained"
        sx={{
          px:1,
          width: "140px",
          fontWeight: "500",
          fontSize: "14px",
          textTransform: "capitalize",
          backgroundColor: "#e9585a",
          "&:hover": {
            backgroundColor: "#e9585a",
          },
        }}
      >
        Advance Search
      </Button>
    </Box>
  </FormProvider>
  )
}

export default AdvanceBooking;