"use client";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const ProfileDropDown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PersonIcon sx={{ mr: 2, cursor: "pointer" }} onClick={handleClick} />
        <Typography variant="h6" component="h6">
          Hello User
        </Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "10pc",
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ borderBottom: "1px solid #cdd2d9" }}
        >
          <AccountCircleOutlinedIcon
            sx={{
              mr: 0.5,
              color: "#2278C8",
              fontSize: "10",
            }}
          />
          <Typography
            variant="h6"
            component="p"
            color="primary"
            sx={{ fontSize: "14px" }}
          >
            Profile
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#64748B", fontSize: "14px" }}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#64748B", fontSize: "14px" }}
        >
          Booking
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#64748B", fontSize: "14px" }}
        >
          Report
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#64748B", fontSize: "14px" }}
        >
          Setting
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            borderTop: "1px solid #cdd2d9",
            color: "#ED5A5B",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          Sign Out
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileDropDown;
