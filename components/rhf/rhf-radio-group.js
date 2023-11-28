// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import {
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

const RHFRadioGroup = ({
  name,
  options,
  outerLabel,
  disabled = false,
  color= '#465365',
  ...other
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, field: { onChange }, fieldState: { error } }) => (
        <div>
          {outerLabel && <FormLabel color={color}>{outerLabel}</FormLabel>}
          <RadioGroup
            {...field}
            row
            {...other}
            onChange={(e) => {
              const newValue = e.target.value;

              if (typeof newValue !== "string") return;
              if (newValue === "true") onChange(true);
              else if (newValue === "false") onChange(false);
              else onChange(newValue);
            }}
          >
            {options.map(({ value, label }) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio disabled={disabled} />}
                label={label}
              />
            ))}
          </RadioGroup>

          {Boolean(error) && (
            <FormHelperText error sx={{ px: 2 }}>
              {error?.message}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
};

export default RHFRadioGroup;
