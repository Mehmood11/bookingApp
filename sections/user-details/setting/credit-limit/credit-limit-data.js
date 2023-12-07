import RHFTextField from "@/components/rhf/rhf-textfield";

export const creditLimitData = [
  {
    id: 1,
    gridLength: 4,
    componentProps: {
      size:"small",
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
      size:"small",
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
      size:"small",
      outerLabel: "Available Limit",
      name: "availableLimit",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const defaultValues = {
  creditLimit: "Agent Details",
  utilizedLimit: "Booking Ref No",
  availableLimit: "Available Limit",
};
