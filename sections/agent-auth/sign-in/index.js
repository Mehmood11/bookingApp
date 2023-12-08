"use client";
import FormProvider from "@/components/rhf/form-provider";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { signInData } from "./signInData";
import { RHFCheckbox } from "@/components/rhf/rhf-checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const methods = useForm({});
  const route = useRouter();

  const { handleSubmit } = methods;

  const onSubmitHandler = (data) => {
    route.push("/agent/search-flight");
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
        p: { xs: 2, md: 4 },
        margin: "0 auto",
        maxWidth: "500px",
        width: "100%",
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
        <Grid container rowSpacing={3}>
          {signInData?.map((item) => {
            const { component: Component, componentProps } = item;
            return (
              <Grid item xs={12} md={12} lg={item?.gridLength} key={item?.id}>
                <Component {...componentProps} />
              </Grid>
            );
          })}
          <Button
            sx={{
              mt: 2,
              p: 2,
              width: "100%",
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
              href="/agent/sign-up"
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
