 import React from "react"
import Navbar from "./components/navbar/navbar";
import { StyledEngineProvider } from "@mui/material";
import { fetchNewalbums,fetchTopalbums,fetchSongs } from "./Api/api";
import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";

function App()
{
      const [data,setdata]=useState({})

      const generateData=(key,source)=>{
        source().then((data)=>{
          setdata((prevstate)=>{
            return{...prevstate,[key]:data};
          });
        })
      }

      useEffect(()=>{
        generateData("topAlbums",fetchTopalbums);
        generateData("newAlbums",fetchNewalbums);
        generateData("songs",fetchSongs);
      },[]);

      const{topAlbums=[],newAlbums=[],songs=[]}=data;

  return(

    <StyledEngineProvider injectFirst>
    <Navbar/>
   
    <Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
    </StyledEngineProvider>
  
    
  )
}

export default App;
