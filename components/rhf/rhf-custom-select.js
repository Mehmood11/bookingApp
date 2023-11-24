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
            <FormLabel sx={{ pb: "0.6rem" }}>{outerLabel}</FormLabel>
          )}
          <Select
            displayEmpty
            menuProps={menuProps}
            inputRef={field.ref}
            {...field}
            {...others}
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
