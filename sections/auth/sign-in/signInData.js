import { RHFCheckbox } from "@/components/rhf/rhf-checkbox";
import RHFCustomSelect from "@/components/rhf/rhf-custom-select";
import RHFDatePicker from "@/components/rhf/rhf-date-picker";
import RHFTextField from "@/components/rhf/rhf-textfield";

export const signInData = [
  {
    id: 1,
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
    id: 2,
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

  
];
