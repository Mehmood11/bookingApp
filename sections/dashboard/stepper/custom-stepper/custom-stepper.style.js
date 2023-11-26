import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import { styled } from "@mui/material/styles";

export const ColorLibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      //   backgroundColor: "#7A5AF8",
      border: "2px dotted #7A5AF8",
    },
  },
  [theme.breakpoints.down("sm")]: {
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "white",
      },
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      //   backgroundColor: "#7A5AF8",
      border: "2px dotted #7A5AF8",

      height: 0,
    },
  },
  [theme.breakpoints.down("md")]: {
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "white",
      },
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    border: "2px dotted gray",
    backgroundColor: "transparent",
    borderRadius: 1,
  },
}));

export const ColorLibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 24,
  height: 24,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    border: "3px solid #7A5AF8",
    backgroundColor: "transparent",
  }),
  ...(ownerState.completed && {
    border: "3px solid #7A5AF8",
    backgroundColor: "#7A5AF8",
  }),
}));
