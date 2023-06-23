import React from "react";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";
import Rightbar from "../components/Rightbar";
import {Stack} from "@mui/material";

 class Home extends React.Component {
  render(){
    return (
      <div>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Posts/>
        <Rightbar/>
        </Stack>
      </div>
    );
  }
}

export default Home;