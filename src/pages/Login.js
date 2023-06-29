import { Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h4">Hola</Typography>
        <Button component={Link} to="/Home" variant="contained" color="primary">
          Ir a Home
        </Button>
      </div>
    );
  }
}

export default Login;