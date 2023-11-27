import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordion = ({ items }) => {
  const [expanded, setExpanded] = React.useState("Passenger (1 Adult)");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {items?.map((item, index) => {
        console.log(
          "expanded === item.title",
          "Passenger (1 Adult)" === item.title
        );
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
              expanded={true}
              onChange={handleChange(item.title)}
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
