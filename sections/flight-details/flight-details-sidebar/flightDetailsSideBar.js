import CustomAccordion from "@/components/custom-accordian/customAccordion";
import { Box, Divider } from "@mui/material";
import React from "react";

const filterData = [
  {
    title: "Price",
    content: "ergergergerg",
  },
];

const FlightDetailsSideBar = () => {
  return (
    <Box>
      <Box sx={{ fontSize: "24px", fontWeight: 600, mb: 1 }}>Filters</Box>
      <Divider
        sx={{
          border:
            "1px solid linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
        }}
      />
      <CustomAccordion item={filterData} />
    </Box>
  );
};

export default FlightDetailsSideBar;
