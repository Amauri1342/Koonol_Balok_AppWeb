import React from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Publications";
import Rightbar from "../components/Rightbar";
import Navbar from "../components/Navbar";
import {Stack} from "@mui/material";

 class Home extends React.Component {
  render(){
    return (
      <div>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </Stack>
      </div>
    );
  }
}

export default Home;