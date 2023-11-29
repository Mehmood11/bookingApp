"use client";
import React from "react";
import CustomAccordion from "@/components/custom-accordian/customAccordion";
import FormProvider from "@/components/rhf/form-provider";
import RHFTextField from "@/components/rhf/rhf-textfield";
import { Box, Divider, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { RHFCheckbox } from "@/components/rhf/rhf-checkbox";
import HelpAndOfferCard from "@/components/help-and-offer-card";

const FlightDetailsSideBar = () => {
  const methods = useForm({
    defaultValues: {
      ticket: "",
      passportNum: "",
      passengerName: "",
      from: null,
      to: null,
    },
  });

  const filterData = [
    {
      title: "Price",
      content: (
        <Box>
          <FormProvider methods={methods}>
            <Stack flexDirection="row" gap={4}>
              <RHFTextField
                type="number"
                name="min"
                placeholder=""
                outerLabel="min"
              />
              <RHFTextField
                type="number"
                name="max"
                placeholder=""
                outerLabel="max"
              />
            </Stack>
          </FormProvider>
        </Box>
      ),
    },
    {
      title: "Departure time",

      content: (
        <FormProvider methods={methods}>
          <Stack flexDirection="colunm" gap={2}>
            <RHFCheckbox name="min" placeholder="" label="One Way" />
            <RHFCheckbox name="max" placeholder="" label="Return" />
          </Stack>
        </FormProvider>
      ),
    },
    {
      title: "Journey duration",
      content: "test 1",
    },
    {
      title: "Airlines",
      content: "test 2",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "90vh",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ fontSize: "24px", fontWeight: 600, mb: 1 }}>Filters</Box>
      <Divider
        sx={{
          border:
            "1px solid linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
        }}
      />
      <Box>
        <CustomAccordion items={filterData} />
      </Box>
      <HelpAndOfferCard
        description="A central hub for resolution center, FAQs, live chats and a community."
        title="Need Help?"
        btnTitle="Need Help?"
      />
    </Box>
  );
};

export default FlightDetailsSideBar;
