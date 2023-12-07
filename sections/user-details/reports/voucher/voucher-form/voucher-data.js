import RHFCustomSelect from "@/components/rhf/rhf-custom-select";
import RHFDatePicker from "@/components/rhf/rhf-date-picker";
import RHFTextField from "@/components/rhf/rhf-textfield";

export const voucherData = [
  {
    id: 1,
    gridLength: 4,
    componentProps: {
      size: "small",
      outerLabel: "Agent & Subagent Details",
      name: "agentDetails",
      fullWidth: true,
      options: [
        { label: "All", value: "all" },
        { label: "Gofal Fostering", value: "Gofal_Fostering" },
      ],
    },
    component: RHFCustomSelect,
  },
  {
    id: 2,
    gridLength: 4,
    componentProps: {
      size: "small",
      outerLabel: "Booking Ref. No.",
      placeholder: "Booking Ref. No.",
      name: "bookingRefNo",
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 4,
    componentProps: {
      size: "small",
      outerLabel: "Services",
      name: "services",
      fullWidth: true,
      options: [
        { label: "All", value: "all" },
        { label: "Gofal Fostering", value: "Gofal_Fostering" },
      ],
    },
    component: RHFCustomSelect,
  },
  {
    id: 4,
    gridLength: 4,
    componentProps: {
      size: "small",
      outerLabel: "From",
      name: "from",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 4,
    componentProps: {
      size: "small",
      outerLabel: "To",
      name: "toDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];

export const defaultValues = {
  agentDetails: "all",
  bookingRefNo: "Booking Ref No",
  services: "all",
  passengerName: "Passenger Name",
  from: new Date(),
  toDate: new Date(),
};
