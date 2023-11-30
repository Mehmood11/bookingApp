"use client";
import HelpAndOfferCard from "@/components/help-and-offer-card";
import FormProvider from "@/components/rhf/form-provider";
import { RHFCheckbox } from "@/components/rhf/rhf-checkbox";
import RHFRadioGroup from "@/components/rhf/rhf-radio-group";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Payment = () => {
  const methods = useForm({ ways: "Credit Limit" });

  const { handleSubmit } = methods;

  const onSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Box sx={{ paddingX: { lg: "5rem" } }}>
        <Box
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            pt: 4,
            mb: 2,
            color: "#465365",
          }}
        >
          Choose a <span style={{ color: "#2278C8" }}>Payment</span>Method
        </Box>

        <Grid container>
          <Grid item xs={12} lg={8}>
            <RHFRadioGroup
              defultValue="Credit Limit"
              name="ways"
              sx={{ color: "#000" }}
              options={[
                { label: "Credit Limit", value: "Credit Limit" },
                { label: "Credit Card", value: "Credit Card" },
                { label: "Go Unlimited", value: "Go Unlimited" },
              ]}
            />
            <Box>
              <Box
                sx={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#2278C8",
                  marginY: 2,
                }}
              >
                Grand Total
              </Box>
              <Box
                sx={{ fontSize: "40px", fontWeight: 700, color: "#EC5A5B;" }}
              >
                $453
              </Box>
            </Box>

            <RHFCheckbox
              size="medium"
              name="Conditions"
              label="By Continuing you agree to the Terms and Conditions"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <HelpAndOfferCard
              description=""
              title="Offer"
              type="offer"
              btnTitle="Redeem"
            />
          </Grid>
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
        >
          Pay Now
        </Button>
      </Box>
    </FormProvider>
  );
};

export default Payment;
