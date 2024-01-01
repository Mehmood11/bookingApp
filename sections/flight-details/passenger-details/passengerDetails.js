"use client";
import React from "react";
import { Box, Button, Grid } from "@mui/material";
import FormProvider from "@/components/rhf/form-provider";
import { passengerData } from "./passengerDetailsData";
import { useForm } from "react-hook-form";

const PassengerDetails = ({ nextStepHandler }) => {
  const methods = useForm({});

  const { handleSubmit } = methods;

  const onSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Box sx={{ paddingX:  {lg :"5rem"} }}>
        <Box sx={{ fontSize: "20px", fontWeight: 600, pt: 4, mb: 2, color: "#465365" }}>
          Passenger <span style={{ color: "#2278C8" }}>Details</span>{" "}
        </Box>

        <Grid container spacing={2}>
          {passengerData?.map((form) => {
            return (
              <Grid item xs={12} md={6} lg={form?.gridLength} key={form?.id}>
                <>
                  <form.component size="small" {...form.componentProps}>
                    {form.componentProps.select
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
        <Button
          sx={{
            borderRadius: "10px",
            background: "rgba(235, 51, 52, 0.80)",
            boxShadow: "0px 14px 28px -10px rgba(237, 76, 78, 0.60)",
            color: "#FFF",
            fontSize: "16px",
            fontWeight: 500,
            backdropFilter: "blur(7px)",
            textTransform: "capitalize",
            mt: 2,
            padding: "14px 45px",
            "&:hover": {
              background: "rgba(235, 51, 52, 0.80)",
              boxShadow: "0px 14px 28px -10px rgba(237, 76, 78, 0.60)",
            },
          }}
          variant="contained"
          onClick={nextStepHandler}
        >
          Continue
        </Button>
      </Box>
    </FormProvider>
  );
};

export default PassengerDetails;
