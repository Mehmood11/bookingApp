import React, { useState } from "react";
import Link from "next/link";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// google fonts
import { Poppins } from "next/font/google";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import ProfileDropDown from "@/components/profile-drop-down";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const pagesNavbar = [
  { id: 1, title: "About Us", link: "/agent/search-flight" },
  { id: 2, title: "Flight Schedule", link: "/agent/flight-schedule" },
  { id: 3, title: "Account Settings", link: "/agent/account-setting" },
  { id: 4, title: "Manage Bookings", link: "/agent/manage-bookings" },
];

const DesktopNavbar = () => {
  const route = useRouter();

  const [login, setLogin] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
        <Link href="/agent/search-flight">
          <Image src={logo} alt="logo" width={130} />
        </Link>
      </Box>
      {/* <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: 3,
        }}
      >
        {pagesNavbar.map((page) => (
          <StyledNavLink key={page.id} href={page.link}>
            {page.title}
          </StyledNavLink>
        ))}
      </Box> */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", lg: "flex" },
          justifyContent: "flex-end",
        }}
      >
        {!login ? (
          <>
            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow:
                    "0px 3.69709px 7.39418px -2.77282px rgba(16, 24, 40, 0.16)",
                  backdropFilter: "blur(4.159223556518555px)",
                  padding: "13px 34px",
                  color: "#1E5E89",
                  fontSize: "15px",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "white",
                    boxShadow:
                      "0px 3.69709px 7.39418px -2.77282px rgba(16, 24, 40, 0.16)",
                  },
                }}
                onClick={() => {
                  route.push("/agent/sign-up");
                }}
              >
                Become An Agent
              </Button>
            </Box>

            <Button
              variant="outlined"
              sx={{
                border: "none",
                color: "white",
                fontSize: "15px",
                fontWeight: 600,
                textTransform: "capitalize",
                "&:hover": {
                  border: "none",
                },
              }}
              onClick={() => {
                setLogin(true);
                route.push("/agent/sign-in");
              }}
            >
              Login
            </Button>
          </>
        ) : (
          <ProfileDropDown />
        )}
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
