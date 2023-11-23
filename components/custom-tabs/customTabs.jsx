import React, { useState, Children } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { styles } from "./tabs.styles";

const CustomTabs = ({ tabsArray = [], children, Index = 0 }) => {
  const tabChildren = Children.toArray(children);
  const [value, setValue] = useState(Index);
  return (
    <Box>
      <Box sx={styles.tabsWrapper}>
        <Tabs
          classes={{ root: "_root", indicator: "_indicator" }}
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
          variant="scrollable"
        >
          {tabsArray.map((tab, index) => (
            <Tab
              disableRipple
              classes={{ root: "tab_root", selected: "_selected" }}
              key={index}
              label={tab}
              value={index}
            />
          ))}
        </Tabs>
      </Box>
      {tabChildren?.map(
        (child, index) => value === index && <Box key={index}>{child}</Box>
      )}
    </Box>
  );
};

export default CustomTabs;
