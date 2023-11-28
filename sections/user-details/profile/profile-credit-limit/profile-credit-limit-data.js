import RHFTextField from "@/components/rhf/rhf-textfield";

export const ProfileCreditLimitData = [
  {
    id: 1,
    gridLength: 4,
    componentProps: {
      outerLabel: "Credit Limit",
      name: "creditLimit",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 4,
    componentProps: {
      outerLabel: "Utilized Limit",
      placeholder: "Utilized Limit",
      name: "utilizedLimit",
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 4,
    componentProps: {
      outerLabel: "Available Limit",
      name: "availableLimit",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const defaultValues = {
  creditLimit: "$ 1000.00",
  utilizedLimit: "Utilized Limit",
  availableLimit: "$ 1245.00",
};
