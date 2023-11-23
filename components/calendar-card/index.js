import React from "react";
import Image from "next/image";
import upArrow from "../../assets/images/upArrow.svg";
import downArrow from "../../assets/images/upArrow.svg";
import { Box, CardContent, Paper, Stack, Typography } from "@mui/material";

const CalendarCard = (props) => {
  const { title, description, value } = props;
  return (
    <Paper sx={{ minWidth: 275, borderRadius: "12px" }}>
      <CardContent>
        <Stack alignItems="top" direction="row" justifyContent="space-between">
          <Box>
            <Typography variant="h5" component="div" fontWeight="600">
              {description}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {title}
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
    </Paper>
  );
};

export default CalendarCard;
