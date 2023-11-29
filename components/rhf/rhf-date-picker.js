import { useFormContext, Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import { FormLabel, Stack } from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";


const RHFDatePicker = ({
  name,
  label,
  outerLabel,
  color = "#465365",
  sxProp,
  ...other
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Stack>
            {outerLabel && (
              <FormLabel sx={{ color: color }}>{outerLabel}</FormLabel>
            )}

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
              sx={{
                ...sxProp,
                borderRadius: "0.5125rem",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.20)",
                backdropFilter: "blur(10px)",
              }}
            />
          </Stack>
        );
      }}
    />
  );
};

export default RHFDatePicker;
