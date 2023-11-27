import RHFTextField from "@/components/rhf/rhf-textfield";

export const changePasswordData = [
  {
    id: 1,
    gridLength: 4,
    componentProps: {
      outerLabel: "Old Password",
      name: "oldPassword",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 4,
    componentProps: {
      outerLabel: "New Password",
      placeholder: "New Password",
      name: "newPassword",
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 4,
    componentProps: {
      outerLabel: "Confirm Password",
      name: "confirmPassword",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const defaultValues = {
  oldPassword: "Old Password",
  newPassword: "New Password",
  confirmPassword: "Confirm Password",
};
