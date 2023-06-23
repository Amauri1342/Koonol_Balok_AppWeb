import React from "react";
import Publicidad from "./Publicidad";
import Recomendados from "./Recomendados";
import { Box, Typography, Divider } from "@mui/material";

function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
        position: "sticky",
        top: 0,
        maxHeight: "100vh",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "6px",
          borderRadius: "3px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "3px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}
    >
      <Box marginBottom="10px">
        <Typography variant="h6">Publicidad</Typography>
        <Divider />
        <Publicidad />
      </Box>
      <Box>
        <Typography variant="h6">Recomendados</Typography>
        <Divider />
        <Recomendados />
      </Box>
    </Box>
  );
}

export default Rightbar;
