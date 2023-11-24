// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  FormControl,
  Typography,
} from "@mui/material";

import React from "react";

export const RHFCheckbox = ({ name, label, ...other }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormControl error={Boolean(error)}>
            <FormControlLabel
              label={<Typography variant="subtitle2">{label}</Typography>}
              control={
                <Checkbox
                  {...field}
                  checked={field.value}
                  disabled={other.disabled}
                  sx={(theme) => ({
                    stroke: theme.palette.background.default,
                    strokeWidth: 1,
                  })}
                  {...other}
                />
              }
            />
            {error && <FormHelperText>{error?.message}</FormHelperText>}
          </FormControl>
        );
      }}
    />
  );
};

///////////// ------------ RHFMulti Checkbox ------------ ////////////////
const RHFMultiCheckbox = ({ name, options, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const onSelected = (option) => {
          if (field.value.includes(option))
            return field.value.filter(
              (selectedOption) => selectedOption !== option
            );

          return [...field.value, option];
        };

        return (
          <FormControl error={Boolean(error)}>
            <FormGroup>
              {options.map(({ label, value }) => (
                <FormControlLabel
                  key={value}
                  control={
                    <Checkbox
                      checked={field.value.includes(value)}
                      onChange={() => {
                        field.onChange(onSelected(value));
                      }}
                    />
                  }
                  label={label}
                  {...other}
                />
              ))}
            </FormGroup>
            {error && <FormHelperText>{error?.message}</FormHelperText>}
          </FormControl>
        );
      }}
    />
  );
};

export default RHFMultiCheckbox;
