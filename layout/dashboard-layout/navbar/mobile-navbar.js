import React, { useState } from "react";
import Link from "next/link";
import { Drawer, Button, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import logo from "../../../assets/logo.svg";

// google fonts
import { Poppins } from "next/font/google";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileDropDown from "@/components/profile-drop-down";
import { useRouter } from "next/navigation";

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

const MobileNavbar = ({ toggleDrawerMenu, openMenu }) => {
  const route = useRouter();

  const [login, setLogin] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
        <Box sx={{ flexGrow: 0 }}>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <Drawer
            anchor="left"
            open={openMenu}
            onClose={toggleDrawerMenu}
            sx={{
              "& .MuiPaper-root": {
                borderBottomRightRadius: "20px",
                borderTopRightRadius: "20px",
                background:
                  "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
                boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
                backdropFilter: "blur(12px)",
                borderRadius: "12px",
              },
            }}
          >
            <Box sx={{ width: "240px", p: 2, borderTopRightRadius: "20px" }}>
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
                      onClick={() => {
                        route.push("/agent/sign-up");
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
          </Drawer>
        </Box>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", lg: "none" },
          justifyContent: "flex-end",
          color: "white",
        }}
      >
        <Button onClick={toggleDrawerMenu}>
          <MenuIcon sx={{ color: "white" }} />
        </Button>
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
