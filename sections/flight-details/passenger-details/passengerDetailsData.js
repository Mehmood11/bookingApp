import { RHFCheckbox } from "@/components/rhf/rhf-checkbox";
import RHFCustomSelect from "@/components/rhf/rhf-custom-select";
import RHFDatePicker from "@/components/rhf/rhf-date-picker";
import RHFTextField from "@/components/rhf/rhf-textfield";

export const passengerData = [
  {
    id: 1,
    gridLength: 4,
    componentProps: {
      outerLabel: "",
      placeholder: "First Name",
      name: "firstName",
      multiline: false,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 4,
    componentProps: {
      outerLabel: "",
      placeholder: "Last Name",
      name: "lastName",
      multiline: false,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 4,
    componentProps: {
      outerLabel: "",
      name: "emailId",
      placeholder: "Email Id",
      fullWidth: true,
      select: true,
      options: [
        { label: "id1", value: "id1" },
        { label: "id2", value: "id2" },
      ],
    },
    component: RHFCustomSelect,
  },
  {
    id: 4,
    gridLength: 4,
    componentProps: {
      outerLabel: "",
      name: "dob",
      placeholder: "DOB: DD/MM/YYYY*",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 4,
    componentProps: {
      outerLabel: "",
      name: "issueDate",
      placeholder: "DOB: DD/MM/YYYY*",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 6,
    gridLength: 4,
    componentProps: {
      outerLabel: "",
      name: "expiryDate",
      placeholder: "DOB: DD/MM/YYYY*",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 7,
    gridLength: 4,
    componentProps: {
      outerLabel: "",
      name: "placeOfIssue",
      placeholder: "Place of issue",
      fullWidth: true,
      select: true,
      options: [
        { label: "id1", value: "id1" },
        { label: "id2", value: "id2" },
      ],
    },
    component: RHFCustomSelect,
  },
  {
    id: 8,
    gridLength: 4,
    componentProps: {
      outerLabel: "",
      placeholder: "Passport no*",
      name: "passportNo",
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 4,
    componentProps: {
      outerLabel: "",
      name: "nationality",
      placeholder: "Nationality*",
      fullWidth: true,
      select: true,
      options: [
        { label: "Scot Fostering", value: "Scot_Fostering" },
        { label: "Gofal Fostering", value: "Gofal_Fostering" },
      ],
    },
    component: RHFCustomSelect,
  },
  {
    id: 10,
    gridLength: 4,
    componentProps: {
      outerLabel: "",
      placeholder: "Choice File",
      name: "choiceFile",
      multiline: false,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 4,
    componentProps: {
      outerLabel: "",
      placeholder: "Contact number",
      name: "contactNumber",
      multiline: false,
    },
    component: RHFTextField,
  },
  {
    id: 12,
    gridLength: 2,
    componentProps: {
      outerLabel: "",
      name: "nationality",
      placeholder: "Meal",
      fullWidth: true,
      select: true,
      options: [{ label: "test", value: "test" }],
    },
    component: RHFCustomSelect,
  },
  {
    id: 12,
    gridLength: 2,
    componentProps: {
      outerLabel: "",
      name: "wchr",
      placeholder: "WCHR",
      fullWidth: true,
      select: true,
      options: [{ label: "test", value: "test" }],
    },
    component: RHFCustomSelect,
  },
  {
    id: 13,
    gridLength: 12,
    componentProps: {
      name: "wchr",
      label: "Check Extra Service or go to payment page",
      size: "medium",
    },
    component: RHFCheckbox,
  },
];