import React from "react";
import Box from "@mui/material/Box";
import Logo_loader from "../images/Logo_KB.png";
import "../styles/loader.css";
import { Typography } from "@mui/material";

export default function Loader() {
  return (
    <Box className="loader">
      <img src={Logo_loader} alt="Cargando ..." data-aos="zoom-in" />
      <Typography
        className="loader-text"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        Koonol Balok ;3
      </Typography>
    </Box>
  );
}
