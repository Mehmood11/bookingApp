import { useFormContext, Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import { FormLabel, Stack } from "@mui/material";

const RHFDatePicker = ({ name, label, outerLabel, ...other }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Stack gap="0.6rem">
            {outerLabel && <FormLabel>{outerLabel}</FormLabel>}

            <DatePicker
              {...field}
              {...other}
              slotProps={{
                textField: {
                  helperText: error ? error.message : "",
                  error: Boolean(error),
                  fullWidth: other.fullWidth,
                  size: other.size,
                  variant: "outlined",
                },
              }}
              label={label}
            />
          </Stack>
        );
      }}
    />
  );
};

export default RHFDatePicker;
