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
    <Box>
      <Box onClick={handleClick} sx={{ display: "flex", alignItems: "center" }}>
        <PersonIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="h6">
          Hello
        </Typography>
      </Box>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          onClick={handleClose}
          sx={{ borderBottom: "1px solid #cdd2d9" }}
        >
          <AccountCircleOutlinedIcon
            sx={{
              mr: 2,
              color: "#2278C8",
              fontSize: "16",
              fontWeight: "600",
              width: "30px",
              height: "30px",
            }}
          />
          <Typography variant="h6" component="p" color="primary">
            Profile
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#64748B", fontSize: "16px" }}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#64748B", fontSize: "16px" }}
        >
          Booking
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#64748B", fontSize: "16px" }}
        >
          Report
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#64748B", fontSize: "16px" }}
        >
          Setting
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            borderTop: "1px solid #cdd2d9",
            color: "#ED5A5B",
            fontWeight: "600",
          }}
        >
          Sign Out
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileDropDown;
