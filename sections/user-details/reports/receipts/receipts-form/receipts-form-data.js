import RHFDatePicker from "@/components/rhf/rhf-date-picker";

export const receiptsData = [
  {
    id: 1,
    gridLength: 6,
    componentProps: {
      size: "small",
      outerLabel: "From",
      name: "from",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    componentProps: {
      size: "small",
      outerLabel: "To Date",
      name: "toDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];

export const defaultValues = {
  from: new Date(),
  toDate: new Date(),
};
