import React from "react";
import Link from "next/link";
import { Drawer, Button, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import logo from "../../../assets/logo.svg";

// google fonts
import { Poppins } from "next/font/google";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const pagesNavbar = [
  { id: 1, title: "About Us", link: "/search-flight" },
  { id: 2, title: "Flight Schedule", link: "/flight-schedule" },
  { id: 3, title: "Account Settings", link: "/account-setting" },
  { id: 4, title: "Manage Bookings", link: "/manage-bookings" },
];

const MobileNavbar = ({
  toggleDrawerMenu,
  openMenu,
}) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
        <Box sx={{ flexGrow: 0 }}>
            <Button onClick={toggleDrawerMenu}>
              <MenuIcon />
            </Button>
          <Drawer
            anchor="left"
            open={openMenu}
            onClose={toggleDrawerMenu}
            sx={{ borderRadius: "10px" }}
          >
            <Box sx={{ width: "240px", p: 2, borderRadius: 5 }}>
              <IconButton
                sx={{ display: "block", ml: "auto" }}
                onClick={toggleDrawerMenu}
              >
                <CloseIcon />
              </IconButton>
              {pagesNavbar.map((item) => (
                <StyledMenuLink key={item.id} href={item.link}>
                  <Typography>{item.title}</Typography>
                </StyledMenuLink>
              ))}
            </Box>
          </Drawer>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
        <Link href="/">
          <Image src={logo} alt='logo'/>
        </Link>
      </Box>
    </>
  );
};

export default MobileNavbar;

//--------------------------------------------------------
// Styled  components

const StyledMenuLink = styled(Link)(({ theme }) => ({
  padding: "15px",
  color: theme.palette.text.secondary,
  textDecoration: "none",
  fontFamily: poppins.style.fontFamily,
}));
