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
            sx={{ color: "#1E5E89", fontSize: "20px", fontWeight: "600" }}
          >
            Top Up Credit Limit
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{ color: "#64748B", fontSize: "12px" }}
          >
            Lorem Ipsum is simply dummy text of the printing
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <RHFTextField
              size="small"
                type="text"
                name="amount"
                defaultValues="ytu"
                placeholder="$ 0"
                outerLabel="Enter Amount ($)"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "end" }}>
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{
                    px: 1,
                    width: "160px",
                    fontWeight: "500",
                    fontSize: "14px",
                    borderRadius: "10px",
                    textTransform: "capitalize",
                    backgroundColor: "#e9585a",
                    boxShadow: "0px 14px 28px -10px rgba(237, 76, 78, 0.60)",

                    "&:hover": {
                      backgroundColor: "#e9585a",
                      boxShadow: "0px 14px 28px -10px rgba(237, 76, 78, 0.60)",
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
