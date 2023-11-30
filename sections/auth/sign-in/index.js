"use client";
import FormProvider from "@/components/rhf/form-provider";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { signInData } from "./signInData";
import { RHFCheckbox } from "@/components/rhf/rhf-checkbox";
import Link from "next/link";

const SignIn = () => {
  const methods = useForm({});

  const { handleSubmit } = methods;

  const onSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#f1f1f1",
        borderRadius: "12px",
        p: 3,
        boxSizing: "border-box",
        color: "#465365",
        border: "1px solid #FFF",
        background:
          "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
        boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(12px)",
        p: 4,
        width: "30%",
      }}
    >
      <Box
        sx={{
          fontSize: "32px",
          fontWeight: 600,
          color: "#2278C8",
          textAlign: "center",
        }}
      >
        Sign In
      </Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
        <Grid container spacing={2}>
          {signInData?.map((form) => {
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
          <Grid item xs={12}>
            <RHFCheckbox name="rememberMe" label="Remember Me" size="medium" />
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
              padding: "14px 40px",
              width: "100%",
              "&:hover": {
                background: "rgba(235, 51, 52, 0.80)",
                boxShadow: "0px 14px 28px -10px rgba(237, 76, 78, 0.60)",
              },
            }}
            type="submit"
            variant="contained"
            onClick={() => {}}
          >
            Sign In
          </Button>

          <Box
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#000",
              textAlign: "center",
              paddingTop: "1.3rem",
              paddingBottom: "1.3rem",
            }}
          >
            Don’t have an account?
            <Link
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(235, 51, 52, 0.80)",
                textDecoration: "none",
                marginLeft: "4px",
              }}
              href="/sign-up"
            >
              Sign Up
            </Link>
          </Box>
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default SignIn;
