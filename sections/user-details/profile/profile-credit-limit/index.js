"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { Grid, Typography } from "@mui/material";
import FormProvider from "@/components/rhf/form-provider";
import { ProfileCreditLimitData, defaultValues } from "./profile-credit-limit-data";

const ProfileCreditLimit = () => {
  const methods = useForm({
    defaultValues,
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
            Credit Limit
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
            {ProfileCreditLimitData?.map((form) => {
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
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default ProfileCreditLimit;
