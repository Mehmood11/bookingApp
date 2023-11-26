import React, { useState } from "react";
import {
  FormLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RHFTextField = ({
  name,
  type = "text",
  variant = "outlined",
  readOnly = false,
  StartIcon,
  EndIcon,
  outerLabel,
  fullWidth = true,
  ...other
}) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword, setShowPassword] = useState (false);

  const endAdornment =
    type === "password" ? (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    ) : (
      EndIcon
    );
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack gap="0.6rem">
          {outerLabel && (
            <FormLabel sx={{ color: "white" }}>{outerLabel}</FormLabel>
          )}
          <TextField
            {...field}
            error={Boolean(error)}
            helperText={error?.message}
            type={showPassword ? "text" : type}
            variant={variant}
            InputProps={{
              readOnly,
              endAdornment,
              startAdornment: StartIcon,
            }}
            fullWidth={fullWidth}
            {...other}
            sx={{
              borderRadius: "0.8125rem",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.20)",
              backdropFilter: "blur(10px)",
              "& .MuiInputBase-root": {
                borderRadius: "0.8125rem",
              },
              "& .MuiInputBase-input": {
                ml: 2,
              },
            }}
          />
        </Stack>
      )}
    />
  );
};

export default RHFTextField;
