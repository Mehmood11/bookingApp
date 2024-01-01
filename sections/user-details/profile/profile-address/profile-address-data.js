import RHFTextField from "@/components/rhf/rhf-textfield";

export const profileAddressData = [
  {
    id: 1,
    gridLength: 3,
    componentProps: {
      size: "small",
      outerLabel: "Street Address",
      name: "streetAddress",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 3,
    componentProps: {
      size: "small",
      outerLabel: "Zip Code",
      name: "zipCode",
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 3,
    componentProps: {
      size: "small",
      outerLabel: "Town/ City",
      name: "townCity",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 3,
    componentProps: {
      size: "small",
      outerLabel: "Country",
      name: "country",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const defaultValues = {
  streetAddress: "Via Milano 73/B",
  zipCode: "0000",
  townCity: "Brescia",
  country: "Italy",
};
