import React from "react";
import Link from "next/link";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// google fonts
import { Poppins } from "next/font/google";
import Image from "next/image";
import logo from "../../../assets/logo.svg";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const pagesNavbar = [
  { id: 1, title: "About Us", link: "/about" },
  { id: 2, title: "Flight Schedule", link: "/flight-schedule" },
  { id: 3, title: "Account Settings", link: "/account-setting" },
  { id: 4, title: "Manage Bookings", link: "/manage-bookings" },
];

const DesktopNavbar = ({ handleOpenAdd, handleCloseAdd, anchorElAdd }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
        <Link href="/">
          <Image src={logo} />
        </Link>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: 3,
        }}
      >
        {pagesNavbar.map((page) => (
          <StyledNavLink
            key={page.id}
            href={page.link}
            onClick={handleCloseAdd}
          >
            {page.title}
          </StyledNavLink>
        ))}
      </Box>
    </>
  );
};

export default DesktopNavbar;

//--------------------------------------------------------
// Styled  components

const StyledNavLink = styled(Link)(({ theme }) => ({
  // position: "relative",
  padding: "25px 15px",
  color: "white",
  display: "block",
  borderBottom: "3px solid transparent",
  textDecoration: "none",
  textAlign: "center",
  // fontFamily: poppins.style.fontFamily,

  "&::before": {
    content: `""`,
    opacity: 0,
    // position: "absolute",
    width: "100%",
    height: "5px",
    bottom: "-3px",
    left: 0,
    borderTopLeftRadius: "5rem",
    borderTopRightRadius: "5rem",
    backgroundColor: theme.palette.primary.main,
    transition: "opacity .150s",
  },
  "&:hover": {
    "&::before": {
      opacity: 1,
    },
  },
}));
