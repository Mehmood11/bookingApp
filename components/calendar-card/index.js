import React from "react";
import Image from "next/image";
import upArrow from "../../assets/images/upArrow.svg";
import downArrow from "../../assets/images/downArrow.svg";
import { Box, CardContent, Paper, Stack, Typography } from "@mui/material";

const CalendarCard = (props) => {
  const { title, description, value } = props;
  return (
    <Paper
      sx={{
        minWidth: 177,
        borderRadius: "12px",
        border: "1px solid #FFF",
        background:
          "linear-gradient(92deg, #F8FAFC 7.57%, rgba(248, 250, 252, 0.91) 32.7%, #F8FAFC 55.51%, rgba(248, 250, 252, 0.90) 96.73%)",
        boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(12px)",
      }}
    >
      <CardContent>
        <Stack alignItems="top" direction="row" justifyContent="space-between">
          <Box>
            <Box sx={{ fontSize: "16px", fontWeight: "500", color: "#1E293B" }}>
              {description}
            </Box>
            <Box
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#1E293B",
              }}
            >
              {title}
            </Box>
          </Box>
          <Image
            height={20}
            width={38}
            src={value >= 85 ? downArrow : upArrow}
            alt="Test"
          />
        </Stack>
        <Box sx={{ textAlign: "right" }}>
          <Typography
            color={value >= 85 ? "#00A885" : "#F46D7B"}
            fontSize="24px"
            fontWeight="600"
          >
            ${value}
          </Typography>
        </Box>
      </CardContent>
    </Paper>
  );
};

export default CalendarCard;
