import React from "react";
import Image from "next/image";
import { Box, Card, CardContent, Typography } from "@mui/material";

const DashboardCard = (props) => {
  const { backgroundImage, title, amount, alt, src } = props;

  return (
    <Card
      sx={{
        borderRadius: "8",
        // backgroundImage: `url(${dashboardCard.src})`,
        backgroundImage: `url(${backgroundImage?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      <CardContent
        sx={{
          p: 3,
          borderRadius: "8",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="600"
            color="#ffffff"
          >
            {title}
          </Typography>
          <Typography variant="h3" color="#ffffff" fontWeight="600">
            ${amount}
          </Typography>
        </Box>
        <Box>
          <Image height={80} width={80} src={src} alt={alt} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
