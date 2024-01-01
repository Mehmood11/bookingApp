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

const adultsData = [
  {
    title: "ADULTS (12y +)",
    disc: "on the day of travel",
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
];

const infantsData = [
  {
    title: "INFANTS (below 2y)",
    disc: "on the day of travel",
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
];

const childrenData = [
  {
    title: "CHILDREN (2y - 12y )",
    disc: "on the day of travel",
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
];

const CustomModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [adult, setAdult] = useState(3);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(2);

  const handleAdult = (number) => {
    setAdult(number);
  };

  const handleChildren = (number) => {
    setChildren(number);
  };

  const handleInfants = (number) => {
    setInfants(number);
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
          <Box>
            {adultsData.map((item, i) => {
              return (
                <Box>
                  <Box sx={{ mb: 1 }}>
                    <Box
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#23A2DE",
                      }}
                    >
                      {item.title}
                    </Box>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#64748B",
                      }}
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
                            color: adult === number ? "white" : "#000",
                            p: 2,
                            background: adult === number ? "#008cff" : "",
                            BoxShadow:
                              adult === number
                                ? "0 0 6px 0 rgba(0, 0, 0, 0.2)"
                                : "",
                            borderRadius: adult === number ? "4px" : "",
                            cursor: "pointer",
                          }}
                          key={number}
                          variant="contained"
                          color={adult === number ? "white" : "white"}
                          onClick={() => handleAdult(number)}
                        >
                          {number}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box>
            {childrenData.map((item, i) => {
              return (
                <Box>
                  <Box sx={{ mb: 1 }}>
                    <Box
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#23A2DE",
                      }}
                    >
                      {item.title}
                    </Box>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#64748B",
                      }}
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
                            color: children === number ? "white" : "#000",
                            p: 2,
                            background: children === number ? "#008cff" : "",
                            BoxShadow:
                              children === number
                                ? "0 0 6px 0 rgba(0, 0, 0, 0.2)"
                                : "",
                            borderRadius: children === number ? "4px" : "",
                            cursor: "pointer",
                          }}
                          key={number}
                          variant="contained"
                          color={children === number ? "white" : "white"}
                          onClick={() => handleChildren(number)}
                        >
                          {number}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box>
            {infantsData.map((item, i) => {
              return (
                <Box>
                  <Box sx={{ mb: 1 }}>
                    <Box
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#23A2DE",
                      }}
                    >
                      {item.title}
                    </Box>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#64748B",
                      }}
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
                            color: infants === number ? "white" : "#000",
                            p: 2,
                            background: infants === number ? "#008cff" : "",
                            BoxShadow:
                              infants === number
                                ? "0 0 6px 0 rgba(0, 0, 0, 0.2)"
                                : "",
                            borderRadius: infants === number ? "4px" : "",
                            cursor: "pointer",
                          }}
                          key={number}
                          variant="contained"
                          color={infants === number ? "white" : "white"}
                          onClick={() => handleInfants(number)}
                        >
                          {number}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </Box>
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
