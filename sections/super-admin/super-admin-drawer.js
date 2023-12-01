import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavBar } from "./super-admin-data";
import React from "react";
import dashboardLogo from "../../assets/dashboardLogo.svg";
import Image from "next/image";

const SuperAdminDrawer = ({ open, setOpen }) => {
  const handlerClose = () => {
    setOpen(!open);
  };

  const drawerList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={() => setOpen(false)}
    >
      <Box sx={{ textAlign: "center", py:3 }}>
        <Typography
          variant="h5"
          component="a"
          href="#app-bar-with-responsive-menu"
        >
          <Image src={dashboardLogo} alt="dashboard logo" />
        </Typography>
      </Box>
      <List>
        {NavBar.map((item) => (
          <ListItem key={item?.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Image src={item.navIcon} />
              </ListItemIcon>
              <ListItemText primary={item.nav} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor={"left"} open={open} onClose={handlerClose}>
      <Box> {drawerList("left")} </Box>
    </Drawer>
  );
};

export default SuperAdminDrawer;
