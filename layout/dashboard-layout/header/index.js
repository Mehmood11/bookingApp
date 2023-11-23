import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import { IconButton, useTheme, Container, Button } from "@mui/material";
import DesktopNavbar from "../navbar/desktop-navbar";
import MobileNavbar from "../navbar/mobile-navbar";

const Header = () => {
  const [anchorElAdd, setAnchorElAdd] = useState(null);
  const [open, setOpen] = useState(false);
  // const [openNotifications, setOpenNotifications] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();

  const handleOpenAdd = (event) => {
    setAnchorElAdd(event.currentTarget);
  };

  const handleCloseAdd = () => {
    setAnchorElAdd(null);
  };
  const toggleDrawerMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <AppBar
      sx={{
        position: "unset",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopNavbar
            handleOpenAdd={handleOpenAdd}
            handleCloseAdd={handleCloseAdd}
            anchorElAdd={anchorElAdd}
          />
          <MobileNavbar
            toggleDrawerMenu={toggleDrawerMenu}
            handleOpenAdd={handleOpenAdd}
            handleCloseAdd={handleCloseAdd}
            anchorElAdd={anchorElAdd}
            openMenu={openMenu}
          />

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Become An Agent
            </Button>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}> */}
          <Button variant="outlined" sx={{ border: "none", color: "white" }}>
            Login
          </Button>
          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
