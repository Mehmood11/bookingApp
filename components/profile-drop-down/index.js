"use client";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProfileDropDown = () => {
  const router = useRouter();
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
          <Box
            sx={{ display: "flex" }}
            onClick={() => router.push("/agent/profile")}
          >
            <AccountCircleOutlinedIcon
              sx={{
                mr: 0.5,
                color: "#2278C8",
                fontSize: "10",
              }}
            />
            <Typography variant="h6" color="primary" sx={{ fontSize: "14px" }}>
              Profile
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose, router.push("/agent/dashboard");
          }}
          sx={{ color: "#64748B", fontSize: "14px" }}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose, router.push("/agent/booking");
          }}
          sx={{ color: "#64748B", fontSize: "14px" }}
        >
          Booking
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose, router.push("/agent/report");
          }}
          sx={{ color: "#64748B", fontSize: "14px" }}
        >
          Report
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose, router.push("/agent/setting");
          }}
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
          <Link
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(235, 51, 52, 0.80)",
              textDecoration: "none",
              marginLeft: "4px",
            }}
            href="/agent/sign-in"
          >
            Sign Out
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileDropDown;
