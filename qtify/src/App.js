 import React from "react"
import Navbar from "./components/navbar/navbar";
import { StyledEngineProvider } from "@mui/material";


function App()
{


  return(

    <StyledEngineProvider injectFirst>
    <Navbar/>
    </StyledEngineProvider>
  
    
  )
}

export default App;