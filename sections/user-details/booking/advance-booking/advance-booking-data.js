import RHFCustomSelect from "@/components/rhf/rhf-custom-select";
import RHFDatePicker from "@/components/rhf/rhf-date-picker";
import RHFTextField from "@/components/rhf/rhf-textfield";

export const searchTripData = [
  {
    id: 1,
    gridLength: 4,
    componentProps: {
      outerLabel: "Search Type",
      name: "searchType",
      fullWidth: true,
    },
    component: RHFCustomSelect,
  },
  {
    id: 2,
    gridLength: 4,
    componentProps: {
      outerLabel: "Payment Type",
      name: "paymentType",
      fullWidth: true,
    },
    component: RHFCustomSelect,
  },
  {
    id: 3,
    gridLength: 4,
    componentProps: {
      outerLabel: "AgentDetails",
      name: "agentDetails",
      fullWidth: true,
    },
    component: RHFCustomSelect,
  },
  {
    id: 4,
    gridLength: 4,
    componentProps: {
      outerLabel: "Source",
      name: "source",
      multiline: true,
    },
    component: RHFCustomSelect,
  },
  {
    id: 5,
    gridLength: 4,
    componentProps: {
      outerLabel: "Page Record",
      name: "pageRecord",
      fullWidth: true,
    },
    component: RHFCustomSelect,
  },
  {
    id: 7,
    gridLength: 4,
    componentProps: {
      outerLabel: "Passenger Name",
      name: "passengerName",
      multiline: true,
    },
    component: RHFTextField,
  },
];

export const defaultValues = {
  searchType: "searchType",
  paymentType: "paymentType",
  agentDetails: "agentDetails",
  source: "source",
  pageRecord: "pageRecord",
  passengerName: "passengerName",
};
