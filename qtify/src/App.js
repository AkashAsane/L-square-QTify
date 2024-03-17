 import React from "react"
import Navbar from "./components/navbar/navbar";
import { StyledEngineProvider } from "@mui/material";
import Hero from "./components/hero/hero";

function App()
{


  return(

    <StyledEngineProvider injectFirst>
    <Navbar/>
    <Hero/>
    </StyledEngineProvider>
  
    
  )
}

export default App;