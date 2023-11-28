"use client";
import React from "react";
import { Box, Stack } from "@mui/material";
import ProfileImg from "../../../assets/search-flight/Airline.png";
import { useRouter } from "next/navigation";
import HelpAndOfferCard from "@/components/help-and-offer-card";

const sideBarData = [
  {
    id: 1,
    name: "Profile",
    link: "/profile",
  },
  {
    id: 2,
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 3,
    name: "Booking",
    link: "/booking",
  },
  {
    id: 3,
    name: "Report",
    link: "/report",
  },
  {
    id: 3,
    name: "Settings",
    link: "/settings",
  },
];

const UserSideBar = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: "#f1f1f1",
        borderRadius: "12px",
        p: 3,
        boxSizing: "border-box",
        color: "#465365",
        border: "1px solid #FFF",
        background:
          "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
        boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <img
          src={ProfileImg.src}
          alt="profile-img"
          height={"106px"}
          width={"106px"}
          style={{
            borderRadius: "50%",
            boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(12px)",
          }}
        />
        <Box
          sx={{
            color: "#465365",
            fontWeight: 600,
            fontSize: "20px",
            marginTop: 2,
          }}
        >
          John Workman
        </Box>
      </Box>

      <Stack p={5} flexDirection={"column"} gap={3}>
        {sideBarData.map((item, i) => {
          return (
            <Box
              sx={{
                color: "#64748B",
                fontWeight: 400,
                fontSize: "18px",
                cursor: "pointer",
              }}
              key={i}
              onClick={() => router.push(item.link)}
            >
              {item.name}
            </Box>
          );
        })}
      </Stack>
      {/* <HelpAndOfferCard title="Need Help?" /> */}
    </Box>
  );
};

export default UserSideBar;
