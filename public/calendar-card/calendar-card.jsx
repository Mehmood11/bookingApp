import React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import upArrow from "./images/upArrow.svg";
import downArrow from "./images/downArrow.svg";
import { Box, CardContent, Stack, Typography } from "@mui/material";

export const CustomJobStepperSection = (props) => {
  const { day, month, value, } = props;
  return (
    <Card sx={{ minWidth: 275, borderRadius: "12px" }}>
      <CardContent>
        <Stack alignItems="top" direction="row" justifyContent="space-between">
          <Box>
            <Typography variant="h5" component="div" fontWeight="600">
              {month}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {day}
            </Typography>
          </Box>
          <Image
            height={60}
            width={60}
            src={value > 0 ? downArrow : upArrow}
            alt="Test"
          />
        </Stack>
        <Box sx={{ textAlign: "right" }}>
          <Typography color="text.secondary" fontSize="24px" fontWeight="600">
          {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
