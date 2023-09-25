import { Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Login extends React.Component {
  
  state = {
    users: []
  }

  async componentDidMount(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({users:res.data})
    console.log('usuarios', this.state.users)
  }

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