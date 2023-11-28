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
  const { maxWidth, icon, title, description, type, btnTitle } = props;

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
          maxWidth: { maxWidth },
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
                id="outlined-basic"
                label="Outlined"
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
                // my: 2,
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
    </>
  );
};

export default HelpAndOfferCard;
