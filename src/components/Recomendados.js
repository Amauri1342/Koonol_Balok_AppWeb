import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

const Recomendados = () => {
  const NRecomendados = [
    {
      imageUrl:
        "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
      negocio: "Taquería Pancho Lopez",
      estrellas: "5",
    },
    {
      imageUrl:
        "https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg",
      negocio: "Rock & Burger",
      estrellas: "4",
    },
    {
      imageUrl:
        "https://tb-static.uber.com/prod/image-proc/processed_images/291a3db7814e6bd2ef026c10c926600d/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
      negocio: "Burger King(Centro)",
      estrellas: "5",
    },
    {
      imageUrl:
        "https://i1.wp.com/webadictos.com/media/2017/03/secretos-de-dominos-pizza.png?fit=1024%2C538&ssl=1",
      negocio: "Domino's Mérida Itzaes ",
      estrellas: "5",
    },
    {
      imageUrl:
        "https://cl.buscafs.com/www.sandiegored.com/public/uploads/images/126407.jpg",
      negocio: "El crustaceo Cascarudo",
      estrellas: "5",
    },
  ];
  return (
    <Box marginTop="10px">
      {NRecomendados.map((NRecomendados, index) => (
        <Box key={index} mb={2}>
          <Card sx={{ display: "flex", width: "relative", height: "100px", margin: "0px", alignItems:"center"}}>
            <CardMedia
              component="img"
              sx={{ width: 90, height: 90 }}
              image={NRecomendados.imageUrl}
              alt={NRecomendados.negocio}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography fontWeight="bold" fontSize={'auto'}>{NRecomendados.negocio}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                  <StarIcon sx={{ marginRight: "2px", color:"#ffbc2b" }} />
                  <Typography color="#ffbc2b"  >{NRecomendados.estrellas}</Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default Recomendados;
