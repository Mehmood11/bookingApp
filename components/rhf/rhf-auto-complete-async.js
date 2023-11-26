// react
import { useState } from "react";
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { debounce } from "lodash";

// mui icons
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Checkbox, Chip, FormLabel, Stack } from "@mui/material";

// ----------------------------------------------------------------------
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const RHFAutoCompleteAsync = ({
  name,
  apiQuery,
  queryKey = "search",
  debounceTime = 500,
  getOptionLabel = (option) => option.name,
  isOptionEqualToValue = (option, newValue) => option.id === newValue.id,
  multiple = false,
  variant = "outlined",
  outerLabel,
  EndIcon,
  placeholder,
  StartIcon,
  externalParams = {},
  renderOption = (props, option, { selected }) => {
    return (
      <li {...props} key={option.id}>
        {/* <Checkbox
          key={option.id}
          icon={icon}
          checkedIcon={checkedIcon}
          style={{ marginRight: 8 }}
          checked={selected}
        /> */}
        {getOptionLabel(option)}
      </li>
    );
  },
  renderTags = (tagValue, getTagProps) => {
    return tagValue.map((option, index) => (
      <Chip
        {...getTagProps({ index })}
        key={option.id}
        label={getOptionLabel(option)}
      />
    ));
  },
  ...other
}) => {
  // states
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);

  // api
  const [trigger, { data, isLoading, isFetching }] = apiQuery;

  // constants
  const label = other.label;

  // debounce
  const triggerDebounce = debounce((newInputValue) => {
    trigger({ params: { [queryKey]: newInputValue, ...externalParams } });
  }, debounceTime);

  // on changes
  const onChanged = (e, newValue, onChange) => {
    onChange(newValue);
  };
  console.log("data", data);

  return (
    <Controller
      name={name}
      control={control}
      render={(form) => {
        return (
          <Stack gap="0.6rem">
            {outerLabel && <FormLabel>{outerLabel}</FormLabel>}
            <Autocomplete
              {...form.field}
              multiple={multiple}
              id={name}
              open={open}
              autoComplete
              includeInputInList
              filterSelectedOptions
              noOptionsText="No option"
              options={data ?? []}
              disableCloseOnSelect
              {...other}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: 0,
              }}
              onOpen={() => {
                trigger({
                  params: { ...externalParams },
                });
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              isOptionEqualToValue={isOptionEqualToValue}
              getOptionLabel={getOptionLabel}
              loading={isLoading || isFetching}
              onChange={(e, newValue) => {
                onChanged(e, newValue, form.field.onChange);
              }}
              onInputChange={(event, newInputValue) => {
                triggerDebounce.cancel();
                if (newInputValue.trim()) triggerDebounce(newInputValue);
              }}
              filterOptions={(x) => x}
              renderOption={renderOption}
              renderTags={renderTags}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={label}
                  placeholder={placeholder}
                  error={Boolean(form.fieldState.error)}
                  helperText={form.fieldState.error?.message}
                  variant={variant}
                  sx={{
                    "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
                      p: 0,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiSvgIcon-root": {
                      display: "none",
                    },
                    "& .MuiInputBase-root ": {
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                      p: "0 10px 0 0",
                    },
                    backgroundColor: "transparent",
                  }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {isLoading || isFetching ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {EndIcon ?? params.InputProps.endAdornment}
                      </>
                    ),
                    ...(StartIcon && { startAdornment: StartIcon }),
                  }}
                />
              )}
            />
          </Stack>
        );
      }}
    />
  );
};

export default RHFAutoCompleteAsync;
