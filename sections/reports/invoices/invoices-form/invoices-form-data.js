import RHFCustomSelect from "@/components/rhf/rhf-custom-select";
import RHFDatePicker from "@/components/rhf/rhf-date-picker";
import RHFTextField from "@/components/rhf/rhf-textfield";

export const InvoicesData = [
    {
      id: 1,
      gridLength:4,
      componentProps: {
        outerLabel: "Agent & Subagent Details",
        name: "agentDetails",
        fullWidth: true,
        select: true,
        options: [{ label: "Scot Fostering", value: "Scot_Fostering" }, { label: "Gofal Fostering", value: "Gofal_Fostering" }],
      },
      component: RHFCustomSelect,
    },
    {
      id: 2,
      gridLength:4,
      componentProps: {
        outerLabel: "Booking Ref. No.",
        placeholder: "Booking Ref. No.",
        name: "bookingRefNo",
        multiline: true,
      },
      component: RHFTextField,
    },
    {
      id: 3,
      gridLength:4,
      componentProps: {
        outerLabel: "Services",
        name: "services",
        fullWidth: true,
        select: true,
        options: [{ label: "Scot Fostering", value: "Scot_Fostering" }, { label: "Gofal Fostering", value: "Gofal_Fostering" }],
      },
      component: RHFCustomSelect,
      
    },
    {
        id: 4,
        gridLength:4,
        componentProps: {
          outerLabel: "From",
          name: "from",
          fullWidth: true,
        },
        component: RHFDatePicker,
      },
      {
        id: 5,
        gridLength:4,
        componentProps: {
          outerLabel: "To",
          name: "toDate",
          fullWidth: true,
        },
        component: RHFDatePicker,
      },
  ];

  export const defaultValues = {
    agentDetails: "Agent Details",
    bookingRefNo: "Booking Ref No",
    services: "Servicess",
    passengerName: "Passenger Name",
    from: new Date(),
    toDate: new Date(),
};