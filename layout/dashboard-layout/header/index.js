import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, useTheme, Container, Button } from "@mui/material";
import DesktopNavbar from "../navbar/desktop-navbar";
import MobileNavbar from "../navbar/mobile-navbar";
import ProfileDropDown from "@/components/profile-drop-down";

const Header = () => {
  const [anchorElAdd, setAnchorElAdd] = useState(null);
  const [login, setLogin] = useState(false);
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
          <DesktopNavbar />
          <MobileNavbar
            toggleDrawerMenu={toggleDrawerMenu}
            openMenu={openMenu}
          />

          {!login ? (
            <>
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

              <Button
                variant="outlined"
                sx={{ border: "none", color: "white" }}
                onClick={() => {
                  setLogin(true);
                }}
              >
                Login
              </Button>
            </>
          ) : (
            <ProfileDropDown />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
