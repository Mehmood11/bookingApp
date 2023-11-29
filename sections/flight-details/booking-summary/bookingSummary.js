import CustomAccordion from "@/components/custom-accordian/customAccordion";
import HelpAndOfferCard from "@/components/help-and-offer-card";
import FormProvider from "@/components/rhf/form-provider";
import { RHFCheckbox } from "@/components/rhf/rhf-checkbox";
import RHFTextField from "@/components/rhf/rhf-textfield";
import { Box, Button, Divider, Stack } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const BookingSummarySidbar = () => {
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
      title: "Passenger (1 Adult)",
      content: (
        <Box>
          <FormProvider methods={methods}>
            <Stack flexDirection="row" gap={4}>
              <RHFTextField
                type="text"
                name="min"
                placeholder=""
                outerLabel="Check-In"
              />
              <RHFTextField
                type="text"
                name="max"
                placeholder=""
                outerLabel="Hand Bag"
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
          <Stack flexDirection="colunm" gap={1}>
            <Box>03/10/2023</Box>
            <Box>Neos Spa</Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>20:00:00-02:15:00</Box>
              <Box>2h 43min</Box>
            </Box>
          </Stack>
        </FormProvider>
      ),
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
      <Box>
        <Box sx={{ fontSize: "24px", fontWeight: 600, mb: 1 }}>
          Booking Summary
        </Box>
        <Divider
          sx={{
            border:
              "1px solid linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
          }}
        />
        <Box>
          <CustomAccordion items={filterData} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ color: "#2278C8", fontSize: "16px", fontWeight: 500 }}>
            Total
          </Box>
          <Button
            sx={{
              borderRadius: "11px",
              background: "#2278C8",
              boxShadow: "0px 1.39011px 2.78022px 0px rgba(16, 24, 40, 0.05)",
              color: "#FFF",
              fontSize: "24px",
              fontWeight: 700,
              "&:hover": {
                background: "#2278C8",
                boxShadow: "0px 1.39011px 2.78022px 0px rgba(16, 24, 40, 0.05)",
              },
            }}
            variant="contained"
          >
            $381
          </Button>
        </Box>
      </Box>

      <HelpAndOfferCard
        description="A central hub for resolution center, FAQs, live chats and a community."
        title="Need Help?"
        btnTitle="Redeem"
      />
    </Box>
  );
};

export default BookingSummarySidbar;
