import {
  Select,
  FormLabel,
  FormHelperText,
  FormControl,
  MenuItem,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const RHFCustomSelect = ({
  name,
  options,
  outerLabel,
  styleMenu,
  placeholder,
  fullWidth = true,
  ...others
}) => {
  const { control } = useFormContext();

  const menuProps = {
    PaperProps: {
      sx: {
        marginTop: "10px",
      },
    },
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={Boolean(error)} fullWidth={fullWidth}>
          {outerLabel && (
            <FormLabel sx={{ pb: "0.6rem", color: "white" }}>
              {outerLabel}
            </FormLabel>
          )}
          <Select
            displayEmpty
            menuProps={menuProps}
            inputRef={field.ref}
            {...field}
            {...others}
            sx={{
              borderRadius: "0.8125rem",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.20)",
              backdropFilter: "blur(10px)",
            }}
          >
            <MenuItem disabled value="" sx={{ display: "none" }}>
              <em style={{ fontStyle: "normal" }}>{placeholder ?? "Select"}</em>
            </MenuItem>
            {options?.map(({ id, label, value }) => (
              <MenuItem
                value={value}
                key={id}
                sx={{ fontSize: "1.5rem", ...styleMenu }}
              >
                {label}
              </MenuItem>
            ))}
          </Select>
          {Boolean(error) && <FormHelperText>{error?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default RHFCustomSelect;
