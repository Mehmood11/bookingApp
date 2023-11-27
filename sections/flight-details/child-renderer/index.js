import { Children } from "react";

const CustomChildRenderer = ({ index, children }) => {
  const childrenArray = Children.toArray(children);
  return childrenArray[index];
};

export default CustomChildRenderer;
