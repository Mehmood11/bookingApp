import React, { useState, Children } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { styles } from "./tabs.styles";

const CustomTabs = ({ tabsArray = [], children, Index = 0 , tabStyle = {}}) => {
  const tabChildren = Children.toArray(children);
  const [value, setValue] = useState(Index);
  return (
    <Box sx={tabStyle}>
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
              sx={{p: 2}}
            />
          ))}
        </Tabs>
      </Box>
      {tabChildren?.map(
        (child, index) => value === index && <Box key={index} p={2}>{child}</Box>
      )}
    </Box>
  );
};

export default CustomTabs;
