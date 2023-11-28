"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Grid, Typography } from "@mui/material";
import FormProvider from "@/components/rhf/form-provider";
import RHFTextField from "@/components/rhf/rhf-textfield";
// import { defaultValues } from "./credit-limit-data";

const TopUpCreditLimit = () => {
  const methods = useForm({
    // defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container rowSpacing={5} columnSpacing={10}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            component="h5"
            sx={{ color: "#1E5E89", fonSize: "20px", fontWeight: "600" }}
          >
            Top Up Credit Limit
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
            <Grid item xs={12} md={6}>
              <RHFTextField
                type="text"
                name="amount"
                defaultValues="ytu"
                placeholder="$ 0"
                outerLabel="Enter Amount ($)"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "end", my: 4 }}>
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{
                    px: 1,
                    width: "140px",
                    fontWeight: "500",
                    fontSize: "14px",
                    borderRadius:"8px",
                    textTransform: "capitalize",
                    backgroundColor: "#e9585a",
                    "&:hover": {
                      backgroundColor: "#e9585a",
                    },
                  }}
                >
                 Pay Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default TopUpCreditLimit;
