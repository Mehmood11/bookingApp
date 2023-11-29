import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordion = ({ items }) => {
  return (
    <div>
      {items?.map((item, index) => {
        return (
          <Accordion
            sx={{
              boxShadow: "none",
              background: "transparent",
              "&:before": {
                backgroundColor: "transparent",
              },
            }}
            key={index}
          >
            <AccordionSummary
              sx={{ borderBottom: "none" }}
              expandIcon={
                <ExpandMoreIcon
                  sx={{ width: "24px", height: "24px", color: "#3B4D60" }}
                />
              }
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography
                sx={{ color: "#1E5E89", fontSize: "20px", fontWeight: 500 }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CustomAccordion;
