import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const HelpAndOfferCard = (props) => {
  const { icon, title, description, type, btnTitle } = props;

  return (
    <Card sx={{ textAlign: "center" }}>
      <Box>
        <Avatar
          sx={{
            backgroundColor: "#2278c8",
            left: "49%",
            right: "51%",
            top: "7%",
            position: "absolute",
          }}
        >
          {icon}
        </Avatar>
      </Box>
      <CardContent>
        <Typography
          variant="h5"
          component="h5"
          sx={{ fontWeight: "600", my: 3 }}
        >
          {title}
        </Typography>

        {type === "Offer" ? (
          <Box>
            <TextField
              placeholder="Enter the coupon code"
              id="outlined-basic"
              variant="outlined"
              size="small"
            />
          </Box>
        ) : (
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#344054",
              my: 2,
            }}
          >
            {description}
          </Typography>
        )}
        <Button variant="contained" sx={{ fontWeight: "600", my: 2 }}>
          {btnTitle}
        </Button>
      </CardContent>
    </Card>
  );
};

export default HelpAndOfferCard;
