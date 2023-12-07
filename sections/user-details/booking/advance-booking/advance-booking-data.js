import RHFCustomSelect from "@/components/rhf/rhf-custom-select";
import RHFDatePicker from "@/components/rhf/rhf-date-picker";
import RHFTextField from "@/components/rhf/rhf-textfield";

export const searchTripData = [
  {
    id: 1,
    gridLength: 4,
    componentProps: {
      size: "small",
      outerLabel: "Search Type",
      name: "searchType",
      fullWidth: true,
      options: [
        { label: "Scot Fostering", value: "searchType" },
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
      outerLabel: "Payment Type",
      name: "paymentType",
      fullWidth: true,
      options: [
        { label: "Scot Fostering", value: "paymentType" },
        { label: "Gofal Fostering", value: "Gofal_Fostering" },
      ],
    },
    component: RHFCustomSelect,
  },
  {
    id: 3,
    gridLength: 4,
    componentProps: {
      size: "small",
      outerLabel: "AgentDetails",
      name: "agentDetails",
      fullWidth: true,
      options: [
        { label: "Scot Fostering", value: "agentDetails" },
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
      outerLabel: "Source",
      name: "source",
      options: [
        { label: "Scot Fostering", value: "source" },
        { label: "Gofal Fostering", value: "Gofal_Fostering" },
      ],
    },
    component: RHFCustomSelect,
  },
  {
    id: 5,
    gridLength: 4,
    componentProps: {
      size: "small",
      outerLabel: "Page Record",
      name: "pageRecord",
      fullWidth: true,
      options: [
        { label: "Scot Fostering", value: "pageRecord" },
        { label: "Gofal Fostering", value: "Gofal_Fostering" },
      ],
    },
    component: RHFCustomSelect,
  },
  {
    id: 7,
    gridLength: 4,
    componentProps: {
      size: "small",
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
