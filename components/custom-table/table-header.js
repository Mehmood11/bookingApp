"use client";
import { Grid, InputAdornment, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const getDefaultParams = ({ tableHeaderData }) => {
  const defaultParams = {};
  tableHeaderData.forEach((data) => {
    defaultParams[data.FieldProps.name] = "";
  });
  return defaultParams;
};

let timer;
const TableHeader = ({
  tableHeaderData,
  filterButtonShow,
  filterButtonLabel,
  filterButtonProps,
  debounceTimeout = 1000,

  onChanged = () => {
    return null;
  },
}) => {
  const [show, setShow] = useState(!filterButtonShow);
  const [params, setParams] = useState(getDefaultParams({ tableHeaderData }));

  function changeHandler({ target: { name, value } }, type) {
    setParams((oldParams) => {
      const updatedParams = { ...oldParams, [name]: value };

      // Use debounce if search is updated
      clearTimeout(timer);

      if (type === "search") {
        timer = setTimeout(() => {
          onChanged(updatedParams);
        }, debounceTimeout);
      } else {
        onChanged(updatedParams);
      }

      return updatedParams;
    });
  }

  return (
    <Grid container>
      {filterButtonShow && (
        <Button
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
          sx={{
            color: "text.primary",
            border: `1px solid`,
            borderColor: "neutral.300",
            borderRadius: 1.2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6px 7px",
          }}
          {...filterButtonProps}
        >
          {filterButtonLabel}
          <FilterListIcon
            sx={{
              color: "text.primary",
            }}
          />
        </Button>
      )}
      {tableHeaderData.map((data) => {
        if (data.type === "search") {
          return (
            <Grid
              key={data.FieldProps.name}
              xs={12}
              md={3.5}
              lg={2}
              flexWrap="wrap"
              justifyContent="center"
              item
            >
              <TextField
                variant="outlined"
                fullWidth
                size="small"
                value={params[data.FieldProps.name]}
                onChange={(e) => changeHandler(e, data.type)}
                {...data.FieldProps}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

export default TableHeader;
