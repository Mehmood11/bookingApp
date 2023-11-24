import { Step, StepLabel, Stepper } from "@mui/material";
import {
  ColorLibConnector,
  ColorLibStepIconRoot,
} from "./custom-stepper.style";
import { Check } from "@mui/icons-material";
import CircleIcon from "@mui/icons-material/Circle";
function ColorLibStepIcon(props) {
  const { active, completed, className, icon } = props;
  return (
    <ColorLibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? <Check /> : null}
      {!completed && !active && `0${icon}`}
      {active ? (
        <CircleIcon
          color={"#7A5AF8"}
          sx={{ color: "#7A5AF8", fontSize: "10px" }}
        />
      ) : null}
    </ColorLibStepIconRoot>
  );
}

const CustomFlightStepper = ({ steps, active }) => {
  return (
    <Stepper
      activeStep={active}
      alternativeLabel
      connector={<ColorLibConnector />}
    >
      {steps.map((label, i) => (
        <Step key={label}>
          <StepLabel StepIconComponent={ColorLibStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomFlightStepper;
