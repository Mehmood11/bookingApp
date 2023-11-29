import RHFCustomSelect from "@/components/rhf/rhf-custom-select";
import RHFDatePicker from "@/components/rhf/rhf-date-picker";
import RHFTextField from "@/components/rhf/rhf-textfield";

export const searchTripData = [
    {
      id: 1,
      gridLength:4,
      componentProps: {
        outerLabel: "Search Result",
        name: "searchResult",
        fullWidth: true,
        options: [{ label: "Scot Fostering", value: "searchResult" }, { label: "Gofal Fostering", value: "Gofal_Fostering" }],
      },
      component: RHFCustomSelect,
    },
    {
      id: 2,
      gridLength:4,
      componentProps: {
        outerLabel: "From",
        name: "from",
        fullWidth: true,
      },
      component: RHFDatePicker,
    },
    {
      id: 3,
      gridLength:4,
      componentProps: {
        outerLabel: "To",
        name: "toDate",
        fullWidth: true,
      },
      component: RHFDatePicker,
    },
    {
      id: 4,
      gridLength:4,
      componentProps: {
        outerLabel: "Reference Number",
        placeholder: "Reference Number",
        name: "referenceNumber",
      },
      component: RHFTextField,
    },
    {
      id: 5,
      gridLength:4,
      componentProps: {
        outerLabel: "Booking Status",
        name: "bookingStatus",
        fullWidth: true,
        options: [{ label: "Scot Fostering", value: "bookingStatus" }, { label: "Gofal Fostering", value: "Gofal_Fostering" }],
      },
      component: RHFCustomSelect,
      
    },
    {
      id: 7,
      gridLength:4,
      componentProps: {
        outerLabel: "Passenger Name",
        name: "passengerName",
      },
      component: RHFTextField,
    },
  ];

  export const defaultValues = {
    searchResult: "searchResult",
    from: new Date(),
    toDate: new Date(),
    referenceNumber: "Booking Date",
    bookingStatus: "bookingStatus",
    passengerName: "Passenger Name",
};