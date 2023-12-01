"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import RHFRadioGroup from "../rhf/rhf-radio-group";

const travellerData = [
  {
    title: "ADULTS (12y +)",
    disc: "on the day of travel",
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    title: "CHILDREN (2y - 12y )",
    disc: "on the day of travel",
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    title: "INFANTS (below 2y)",
    disc: "on the day of travel",
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
];

const CustomModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedNumber, setSelectedNumber] = useState(3);

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={"sm"}
      fullWidth={true}
    >
      <DialogContent>
        <Box>
          {travellerData.map((item, i) => {
            return (
              <Box>
                <Box sx={{ mb: 1 }}>
                  <Box
                    sx={{ fontSize: "16px", fontWeight: 500, color: "#23A2DE" }}
                  >
                    {item.title}
                  </Box>
                  <Box
                    sx={{ fontSize: "14px", fontWeight: 500, color: "#64748B" }}
                  >
                    {item.disc}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.2)",
                    marginBottom: "24px",
                    borderRadius: "10px",
                    p: 1,
                  }}
                >
                  {item.number.map((number) => {
                    return (
                      <Box
                        sx={{
                          color: selectedNumber === number ? "white" : "#000",
                          p: 2,
                          background:
                            selectedNumber === number ? "#008cff" : "",
                          BoxShadow:
                            selectedNumber === number
                              ? "0 0 6px 0 rgba(0, 0, 0, 0.2)"
                              : "",
                          borderRadius: selectedNumber === number ? "4px" : "",
                          cursor: "pointer",
                        }}
                        key={number}
                        variant="contained"
                        color={selectedNumber === number ? "white" : "white"}
                        onClick={() => handleNumberClick(number)}
                      >
                        {number}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
          <Box>
            <Box sx={{ mb: 1 }}>
              <Box sx={{ fontSize: "16px", fontWeight: 500, color: "#23A2DE" }}>
                CHOOSE TRAVEL CLASS
              </Box>
              <Box>
                <RHFRadioGroup
                  name="travelClass"
                  options={[
                    {
                      label: "Economy",
                      value: "Economy",
                    },
                    { label: "Premium Economy", value: "Premium Economy" },
                    { label: "Business", value: "Business" },
                  ]}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            borderRadius: "10px",
            background: "rgba(235, 51, 52, 0.80)",
            boxShadow: "0px 14px 28px -10px rgba(237, 76, 78, 0.60)",
            color: "#FFF",
            fontSize: "16px",
            fontWeight: 500,
            backdropFilter: "blur(7px)",
            textTransform: "capitalize",
            mt: 2,
            padding: "8px 20px",
            "&:hover": {
              background: "rgba(235, 51, 52, 0.80)",
              boxShadow: "0px 14px 28px -10px rgba(237, 76, 78, 0.60)",
            },
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          sx={{
            borderRadius: "10px",
            background: "#008cff",
            color: "#FFF",
            fontSize: "16px",
            fontWeight: 500,
            backdropFilter: "blur(7px)",
            textTransform: "capitalize",
            mt: 2,
            padding: "8px 20px",
            "&:hover": {
              background: "#008cff",
            },
          }}
          onClick={handleClose}
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
