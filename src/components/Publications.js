import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from "@mui/icons-material/Share";

const Publications = () => {
  return (
    <Box flex={4} p={2}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              style={{ width: 30, height: 30, marginRight: "5px", marginLeft:"10px", border: "1px solid black"}}
              src="https://www.buscatan.com/uploads/anuncios/1113/logotipo-super-pizza.jpg"
              alt="Super Pizza"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Super Pizza Centro"
          subheader="Junio 21, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://www.dondeir.com/wp-content/uploads/2019/08/pizza-hut-cadenas-de-pizza-cdmx.jpg"
          alt="Pizza"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Super pizza #LaMejor #HechaParaCompartir
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'#df253e'}}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Publications;
