import FormProvider from "@/components/rhf/form-provider";
import { Grid, Typography } from "@mui/material";
import React from "react";

const SearchFlight = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ width: "550px" }}>
          Explore the World's Wonders From Any Location , Anytime!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormProvider></FormProvider>
      </Grid>
    </Grid>
  );
};

export default SearchFlight;
