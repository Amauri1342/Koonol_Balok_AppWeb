import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Publicidad = () => {
  const buttons = [
    {
      imageUrl:
        "https://sabesaprender.com/wp-content/uploads/2022/05/AliExpress-lanza-Espana-Servicio-Logistico_1590150998_669411_660x435.jpg",
      title: "AliExpress",
      website: "aliexpress.com",
      link: "https://best.aliexpress.com",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/G/33/social_share/amazon_logo._CB633266767_.png",
      title: "Amazon",
      website: "amazon.com",
      link: "https://www.amazon.com.mx",
    },
  ];

  return (
    <Box marginTop="10px">

      {buttons.map((button, index) => (
        <Box key={index} mb={2}>
          <Button
            variant="text"
            color="warning"
            sx={{ alignItems: "center", width: "relative" }}
            component={Link}
            to={button.link}
          >
            <Box display="flex" alignItems="center">
              <img
                src={button.imageUrl}
                alt={button.title}
                style={{ width: "30%", marginRight: "10px" }}
              />
              <Box sx={{ textAlign: "left" }}>
                <Typography style={{ textTransform: "none", color: "black" }}>
                  {button.title}
                </Typography>
                <Typography style={{ textTransform: "none", color: "black" }}>
                  {button.website}
                </Typography>
              </Box>
            </Box>
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Publicidad;
