import { Box } from "@mui/material";
import React from "react";
import Post from './Cards';
 function Posts(){
    return(
        <Box flex={4} p={2}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    )
 }
 export default Posts