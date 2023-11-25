import FormProvider from "@/components/rhf/form-provider";
import RHFCustomSelect from "@/components/rhf/rhf-custom-select";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const servicesData = [
  { id: 1, label: "Option 1", value: "option1" },
  { id: 2, label: "Option 2", value: "option2" },
  // Add more options as needed
];

const AddExtra = () => {
  const methods = useForm();

  const { handleSubmit, watch } = methods;

  const onSubmitHandler = (data) => {
    const selectedValue = watch('services');
    console.log("Selected Value:", selectedValue);
  }
  return (
    <Box>
      <Typography
        variant="h5"
        component="h5"
        sx={{ color: "#465365", fonSize: "12px", fontWeight: "600", my: 2 }}
      >
        Add Somthing{" "}
        <Typography
          variant="h5"
          component="sapn"
          sx={{ color: "#2278C8", fonSize: "12px", fontWeight: "600" }}
        >
          Extra
        </Typography>
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
        <Box sx={{width:"100%",maxWidth:"300px"}}>
        <RHFCustomSelect
          name="services"
          label="Controlled"
          size="small"
          options={servicesData}
        />
        </Box>
        <Box sx={{ my: 2 }}>
          <List
            sx={{
              color: "#64748B",
              listStyle: "none",
              fontSize: "14px",
            }}
          >
            <ListItem>
              <ListItemText primary="Add more bags to your allowance" />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Add up to 2 bags now and save 50% compared to price at the
              airport!"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Each bag cannot weigh more than 23kgs" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Additional bags booked are non refundable" />
            </ListItem>
          </List>
          {/* <ul
            style={{
              color: "#64748B",
              listStyle: "none",
              fontSize: "14px",
              lineHeight: 2,
            }}
          >
            <li>Each bag cannot weigh more than 23kgs</li>
            <li>Additional bags booked are non refundable</li>
          </ul> */}
        </Box>

        <Button
          size="large"
          type="submit"
          variant="contained"
          sx={{
            fontWeight: "500",
            fontSize: "12px",
            textTransform: "capitalize",
            backgroundColor: "#EB3334",
          }}
        >
          Continue
        </Button>
      </FormProvider>
    </Box>
  );
};

export default AddExtra;
