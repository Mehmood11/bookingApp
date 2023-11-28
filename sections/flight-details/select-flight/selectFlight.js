import CalendarCard from "@/components/calendar-card";
import { Box } from "@mui/material";
import React from "react";

const cardData = [
  {
    title: "Wednesday",
    description: "October 15",
    value: 81.9,
  },
  {
    title: "Thursday ",
    description: "October 16",
    value: 96.12,
  },
  {
    title: "Friday",
    description: "October 15",
    value: 81.9,
  },
  {
    title: "Saturday",
    description: "October 15",
    value: 81.9,
  },
  {
    title: "Sunday",
    description: "October 15",
    value: 81.9,
  },
  {
    title: "Monday",
    description: "October 15",
    value: 81.9,
  },
  {
    title: "Tuesday",
    description: "October 15",
    value: 81.9,
  },
];

const SelectFlight = () => {
  return (
    <Box
     
    >
      <Box sx={{ color: "#465365", fontSize: "24px", fontWeight: 600 }}>
        Available flights this week Delhi to Mumbai
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "scroll",
          mt: 4,
        }}
      >
        {cardData.map((item) => {
          return (
            <CalendarCard
              title={item.title}
              description={item.description}
              value={item.value}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default SelectFlight;
