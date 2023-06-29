import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import StarRateIcon from "@mui/icons-material/StarRate";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import User from "../images/Nezuko.png";

function Sidebar() {
  return (
    <Box flex={1.5} p={2} sx={{ display: { xs: "none", sm:"none", md:"block"} }}>
      <Box position="fixed" >
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/Home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/Home">
              <Avatar
                style={{ width: 30, height: 30, marginRight: "25px" }}
                alt="RemySharp"
                src={User}
              />
              <ListItemText primary="Amauri Cocom" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Mercado" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              <ListItemText primary="Cupones" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptLongIcon />
              </ListItemIcon>
              <ListItemText primary="Historial" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarRateIcon />
              </ListItemIcon>
              <ListItemText primary="Favoritos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Brightness6Icon />
              </ListItemIcon>
              <Switch color="warning" style={{ color: "#ff5900" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
export default Sidebar;
