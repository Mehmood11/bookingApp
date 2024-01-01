"use client";
import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Paper } from "@mui/material";

const MultiButtons = ({ options, onSelect, name }) => {
  const [selectedButton, setSelectedButton] = useState("oneWay");

  const handleButtonChange = (event, newSelectedButton) => {
    if (newSelectedButton !== null) {
      setSelectedButton((prevSelectedButton) =>
        prevSelectedButton === newSelectedButton
          ? prevSelectedButton
          : newSelectedButton
      );
    }
  };

  return (
    <ToggleButtonGroup
      name={name}
      value={selectedButton}
      exclusive
      onChange={handleButtonChange}
      aria-label="toggle-button-group"
    >
      {options.map((option, index) => (
        <ToggleButton
          key={option.value}
          value={option.value}
          aria-label={option.label}
          style={{
            backgroundColor:
              selectedButton === option.value
                ? "#1E5E89"
                : "#fff",
            color: selectedButton === option.value ? "#F8FAFC" : "#64748B",
            marginRight: index < options.length - 1 ? "1rem" : 0,
            borderRadius: "8px",
            boxShadow: "0px 4px 8px -2px rgba(16, 24, 40, 0.18)",
            backdropFilter: "blur(100px)",
            fontSize: "16px",
            fontWeight: "500",
            textTransform: "capitalize",
          }}
        >
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default MultiButtons;
