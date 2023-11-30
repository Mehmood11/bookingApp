"use client";
import Image from "next/image";
import {
  Box,
  Menu,
  AppBar,
  Avatar,
  Button,
  Tooltip,
  Toolbar,
  MenuItem,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import dashboardLogo from "../../../assets/dashboardLogo.svg";
import dashboardIcon from "../../../assets/dashboard-icons/dashboardIcon.svg";
import searchFlight from "../../../assets/dashboard-icons/searchFlight.svg";
import bookingHistory from "../../../assets/dashboard-icons/bookingHistory.svg";
import agent from "../../../assets/dashboard-icons/agent.svg";
import creditHistory from "../../../assets/dashboard-icons/creditHistory.svg";
import report from "../../../assets/dashboard-icons/report.svg";
import userIcon from "../../../assets/dashboard-icons/userIcon.svg";
import dashboardBg from "../../../assets/dashboard-icons/dashboardBg.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NavBar = [
  {
    id: 1,
    nav: "Dashboard",
    navIcon: dashboardIcon,
  },
  {
    id: 2,
    nav: "Search Flight",
    navIcon: searchFlight,
  },
  {
    id: 3,
    nav: "Booking History",
    navIcon: bookingHistory,
  },
  {
    id: 4,
    nav: "Agent",
    navIcon: agent,
  },
  {
    id: 5,
    nav: "Credit History",
    navIcon: creditHistory,
  },
  {
    id: 6,
    nav: "Reports",
    navIcon: report,
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Dashboard = () => {
  const imageWidth = 24;
  const imageHeight = 24;
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Image src={dashboardLogo} alt="dashboard logo" />
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {NavBar?.map((navLink) => {
                  return (
                    <MenuItem key={navLink?.id} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{navLink?.nav}</Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Image src={dashboardLogo} alt="dashboard logo" />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                backgroundImage: `url(${dashboardBg.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minWidth: "970px",
                margin: "0px auto",
                width: "auto",
                height: "88px",
              }}
            >
              {NavBar?.map((navLink) => {
                return (
                  <Stack textAlign="center" key={navLink?.id}>
                    <Box>
                      <Image
                        src={navLink?.navIcon}
                        alt="nav Icon"
                        width={imageWidth}
                        height={imageHeight}
                      />
                    </Box>
                    <Button
                      key={navLink}
                      onClick={handleCloseNavMenu}
                      sx={{
                        color: "#57737E",
                        display: "block",
                        textTransform: "capitalize",
                        fontSize: "14px",
                      }}
                    >
                      {navLink?.nav}
                    </Button>
                  </Stack>
                );
              })}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src={userIcon} alt="user Icon">
                    <Image src={userIcon} />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Dashboard;
