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
  const { icon, title = "Need Help ?", description, type, btnTitle } = props;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "-23px",
        }}
      >
        <Avatar
          sx={{
            backgroundColor: "#2278c8",
          }}
        >
          {icon}
        </Avatar>
      </Box>
      <Card
        sx={{
          textAlign: "center",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "400px",
          px: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontWeight: "600", my: 2 }}
          >
            {title}
          </Typography>

          {type === "offer" ? (
            <Box>
              <TextField
                id="email"
                variant="outlined"
                size="small"
                placeholder="Enter the coupon code"
                fullWidth
              />
            </Box>
          ) : (
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#344054",
              }}
            >
              {description}
            </Typography>
          )}
          <Button
            variant="contained"
            sx={{
              fontSize: "16px",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "240px",
              fontWeight: "600",
              textTransform: "capitalize",
              my: 2,
            }}
          >
            {btnTitle}
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default HelpAndOfferCard;
