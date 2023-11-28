import RHFCustomSelect from "@/components/rhf/rhf-custom-select";

export const someExtraData = [
  {
    id: 1,
    gridLength: 4,
    componentProps: {
      outerLabel: "",
      name: "emailId",
      placeholder: "Email Id",
      size: "large",
      fullWidth: true,
      select: true,
      options: [
        { label: "id1", value: "id1" },
        { label: "id2", value: "id2" },
      ],
    },
    component: RHFCustomSelect,
  },
];
