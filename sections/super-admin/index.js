"use client";
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Menu,
  AppBar,
  Avatar,
  Button,
  Tooltip,
  Toolbar,
  MenuItem,
  Typography,
  Stack,
  Grid,
  Badge,
  TextField,
  InputAdornment,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
// Navbar icons
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

// Images
import dashboardLogo from "../../assets/dashboardLogo.svg";
import userIcon from "../../assets/dashboard-icons/userIcon.svg";
import dashboardBg from "../../assets/dashboard-icons/dashboardBg.svg";
import Image from "next/image";

import DashboardCard from "@/components/dashboard-card";
import TableHeader from "@/components/custom-table/table-header";
import CustomTable from "@/components/custom-table";
import SuperAdminDrawer from "./super-admin-drawer";
import { NavBar, TableData, cardData, columns } from "./super-admin-data";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const SuperAdmin = () => {
  const [searchParam, setSearchParam] = useState();
  const [open, setOpen] = useState(false);

  const imageWidth = 24;
  const imageHeight = 24;

  const [anchorElUser, setAnchorElUser] = useState();

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
    <Box sx={{ background: "#F9FDFF" }}>
      <SuperAdminDrawer open={open} setOpen={setOpen} />
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none", mb: 4 }}
      >
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
              onClick={() => setOpen(true)}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#000000" }} />
            </IconButton>
          </Box>
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
              // minWidth: "970px",
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
                <Badge
                  sx={{ mr: "23px", marginTop: "5px" }}
                  badgeContent={4}
                  color="error"
                >
                  <NotificationsIcon style={{ color: "#489ae9" }} />
                </Badge>
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
      </AppBar>
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: "20px", fontWeight: "600", mb: "10px" }}
      >
        Dashboard
      </Typography>
      <Grid container spacing={2} mb="20px">
        {cardData.map((item) => (
          <Grid item xs={12} md={6} lg={3} key={item?.id}>
            <DashboardCard
              key={item.id}
              title={item.title}
              amount={item.amount}
              src={item.src}
              backgroundImage={item.backgroundImage}
            />
          </Grid>
        ))}
      </Grid>

      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{ fontSize: "20px", fontWeight: "600", mb: "10px" }}
            >
              Recent Flights Booking
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, pb: 2 }}>
              <TextField
                variant="outlined"
                fullWidth
                size="small"
                onChange={(e) => e.target.value}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                onClick={() => {
                  // show ? setShow(false) : setShow(true);
                }}
                sx={{
                  borderRadius: "4px",
                  border: "1px solid var(--gray-300, #D0D5DD)",
                  background: "#fff",
                  boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                  padding: "8px 16px",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#344054",
                }}
              >
                Filters
                <FilterListIcon
                  sx={{
                    color: "text.primary",
                  }}
                />
              </Button>
            </Box>
          </Box>

          <CustomTable
            columns={columns}
            data={TableData}
            isFetching={false}
            isError={false}
            tableContainerSX={{ backgroundColor: "red" }}
            isSuccess
            isPagination
          />
        </CardContent>
      </Card>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0px -2.262px 13.574px -1.131px rgba(67, 67, 67, 0.17)",
          padding: "20px 40px",
        }}
      >
        <Image src={dashboardLogo} alt="dashboard logo" />
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Box sx={{ fontSize: "16px", fontWeight: "400", color: "#56656B" }}>
            Privacy Policy
          </Box>

          <Box sx={{ fontSize: "16px", fontWeight: "400", color: "#56656B" }}>
            Terms and Condition
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SuperAdmin;
