"use client";
import React from "react";
import { Box, Card, CardContent, Stack } from "@mui/material";
import ProfileImg from "../../../assets/user.png";
import { useRouter } from "next/navigation";
import HelpAndOfferCard from "@/components/help-and-offer-card";

const sideBarData = [
  {
    id: 1,
    name: "Profile",
    link: "/agent/profile",
  },
  {
    id: 2,
    name: "Dashboard",
    link: "/agent/dashboard",
  },
  {
    id: 3,
    name: "Booking",
    link: "/agent/booking",
  },
  {
    id: 3,
    name: "Report",
    link: "/agent/report",
  },
  {
    id: 3,
    name: "Settings",
    link: "/agent/settings",
  },
];

const UserSideBar = () => {
  const router = useRouter();

  return (
    <Card
      sx={{
        backgroundColor: "#f1f1f1",
        borderRadius: "12px",
        boxSizing: "border-box",
        color: "#465365",
        border: "1px solid #FFF",
        background:
          "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
        boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(12px)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        pt: 2,
      }}
    >
      <Box>
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
            Isabella
          </Box>
        </Box>

        <Stack p={2} flexDirection={"column"} gap={3}>
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
      </Box>
      <CardContent style={{ textAlign: "-webkit-center" }}>
        <HelpAndOfferCard
          btnTitle="Chat Now"
          description="A central hub for resolution center, FAQs, live chats and a community. A central hub for resolution center, FAQs, live chats and a community."
          type="offer"
        />
      </CardContent>
    </Card>
  );
};

export default UserSideBar;
