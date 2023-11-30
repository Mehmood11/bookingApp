import { RHFCheckbox } from "@/components/rhf/rhf-checkbox";
import RHFCustomSelect from "@/components/rhf/rhf-custom-select";
import RHFDatePicker from "@/components/rhf/rhf-date-picker";
import RHFTextField from "@/components/rhf/rhf-textfield";

export const signUpData = [
  {
    id: 1,
    gridLength: 12,
    componentProps: {
      outerLabel: "Fist Name",
      placeholder: "Enter your First Name",
      name: "firstName",
      size: "medium",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      outerLabel: "Last Name",
      placeholder: "Enter your Last Name",
      name: "lastName",
      size: "medium",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    componentProps: {
      outerLabel: "Email",
      placeholder: "Enter your Email",
      name: "email",
      size: "medium",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    componentProps: {
      outerLabel: "Password",
      placeholder: "Enter your password",
      name: "password",
      size: "medium",
      type: "password",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    componentProps: {
      outerLabel: "Confirm Password",
      placeholder: "Enter your confirm password",
      name: "confirmPassword",
      size: "medium",
      type: "password",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
