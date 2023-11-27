import RHFCustomSelect from "@/components/rhf/rhf-custom-select";
import RHFDatePicker from "@/components/rhf/rhf-date-picker";
import RHFTextField from "@/components/rhf/rhf-textfield";

export const receiptsData = [
    {
      id: 1,
      gridLength:6,
        componentProps: {
          outerLabel: "From",
          name: "from",
          fullWidth: true,
        },
        component: RHFDatePicker,
    },
    {
      id: 2,
      gridLength:6,
        componentProps: {
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