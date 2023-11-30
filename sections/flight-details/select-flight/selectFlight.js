import AvailableFlightCard from "@/components/available-flight-card/availableFlightCard";
import CalendarCard from "@/components/calendar-card";
import { Box } from "@mui/material";
import React, { useState } from "react";

const cardData = [
  {
    title: "Wednesday",
    description: "October 15",
    value: 85.2,
  },
  {
    title: "Thursday ",
    description: "October 16",
    value: 80.12,
  },
  {
    title: "Friday",
    description: "October 15",
    value: 96.9,
  },
  {
    title: "Saturday",
    description: "October 15",
    value: 81.9,
  },
  {
    title: "Sunday",
    description: "October 15",
    value: 80.52,
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

const SelectFlight = ({ nextStepHandler }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };
  return (
    <Box>
      <Box sx={{ color: "#465365", fontSize: "24px", fontWeight: 600 }}>
        Available flights this week Delhi to Mumbai
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          overflow: "scroll",
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          gap: 2,
          mt: 4,
        }}
      >
        {cardData.map((item) => {
          return (
            <Box sx={{ mb: 0.8 }}>
              <CalendarCard
                title={item.title}
                description={item.description}
                value={item.value}
              />
            </Box>
          );
        })}
      </Box>
      <Box></Box>

      <Box>
        <Box
          sx={{
            color: "#465365",
            fontSize: "24px",
            fontWeight: 600,
            marginY: 4,
          }}
        >
          Available Flights from <span style={{ color: "#2278C8" }}>Delhi</span>{" "}
          to <span style={{ color: "#2278C8" }}>Mumbai</span>
        </Box>
        <Box sx={{ height: "50vh", overflowY: "scroll" }}>
          <AvailableFlightCard nextStepHandler={nextStepHandler} />
        </Box>
      </Box>
    </Box>
  );
};

export default SelectFlight;
