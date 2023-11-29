import RHFTextField from "@/components/rhf/rhf-textfield";

export const agentDetailsData = [
  {
    id: 1,
    gridLength: 3,
    componentProps: {
      outerLabel: "Agent Code",
      name: "agentCode",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 3,
    componentProps: {
      outerLabel: "User Name",
      placeholder: "User Name",
      name: "userName",
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 3,
    componentProps: {
      outerLabel: "Travel Agency",
      name: "travelAgency",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 3,
    componentProps: {
      outerLabel: "Designation",
      name: "designation",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 3,
    componentProps: {
      outerLabel: "Preferred Currency",
      name: "preferredCurrency",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const defaultValues = {
  agentCode: "1523",
  userName: "John",
  designation: "Travel Consultant",
  travelAgency: "Punjab Aviation",
  preferredCurrency: "EUR",
};
