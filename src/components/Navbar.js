import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  InputBase,
  Box,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from '@mui/icons-material/Chat';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import React, { useState } from "react";
import Logo from "../images/Logo.png";
import Logo_responsive from "../images/Logo_KB.png";
import User from "../images/Nezuko.png";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#ff8c3c",
  height: 60,
});

const StyleToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const LogoImage = styled("img")({
  height: 40,
  marginRight: 30,
  marginLeft:10,
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.35),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: "auto",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "45ch",
    },
  },
}));

const IconsCustom = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "15px",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <StyledAppBar position="sticky">
      <StyleToolBar>
        <Box display="flex" alignItems="center">
          <LogoImage
            src={Logo_responsive}
            alt=""
            sx={{ display: { xl: "none", lg: "none", md: "none", sm: "none" } }}
          />
          <LogoImage
            src={Logo}
            alt="Logo"
            sx={{ display: { xs: "none", sm: "block" } }}
          />
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <IconsCustom>
          <IconButton style={{ color: "white" }}>
            <Badge badgeContent={5} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton style={{ color: "white" }}>
            <Badge badgeContent={20} color="error">
              <ChatIcon />
            </Badge>
          </IconButton>
          <IconButton style={{ color: "white" }}>
            <Badge badgeContent={12} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button onClick={(e) => setOpen(true)}>
            <Avatar sx={{ width: 40, height: 40 }} src={User} />
            <ExpandCircleDownIcon sx={{ position: "absolute", bottom: 2, right: 5, color:"white" }} />
          </Button>
        </IconsCustom>
        <Userbox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 40, height: 40 }} src={User} />
          <ExpandCircleDownIcon sx={{ position: "absolute", bottom: 4, right: 12, color:"white"}} />
        </Userbox>
      </StyleToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </StyledAppBar>
  );
}

export default Navbar;
