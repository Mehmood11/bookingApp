import FormProvider from "@/components/rhf/form-provider";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { someExtraData } from "./someThingExtraData";

const SomeThingExtra = ({ nextStepHandler }) => {
  const methods = useForm({});

  const { handleSubmit } = methods;

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  const data = [
    "Add more bags to your allowance",
    "Add up to 2 bags now and save 50% compared to price at the airport!",
    "Each bag cannot weigh more than 23 kgs.",
    "Additional bags booked are non refundable.",
  ];

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Box sx={{ paddingX: "5rem" }}>
        <Box sx={{ fontSize: "20px", fontWeight: 600, pt: 4, mb: 2 , color: "#465365"}}>
          Add Something <span style={{ color: "#2278C8" }}>Extra</span>{" "}
        </Box>

        <Grid container spacing={2}>
          {someExtraData?.map((form) => {
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          {data.map((item) => {
            return (
              <Box sx={{ color: "#64748B", fontSize: "14px", fontWeight: 400 }}>
                {item}
              </Box>
            );
          })}
        </Box>

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

export default SomeThingExtra;
