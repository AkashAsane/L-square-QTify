import { useState,useEffect } from "react";
import React from "react";
import { FetchFilters } from "../../Api/api";
import { Box, Tab, Tabs, Typography } from "@mui/material";

function Tabbox(props)
{
    const{children,value,index,...other}=props;

    return(
        <div
         role="tabbox"
         hidden={value!==index}
         id={`simple-tabbox-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
        >
            {value===index &&(
                <Box sx={{p:3}}>
                 <Typography>{children}</Typography>
                 </Box>
            )} 
        </div>
    )
}

function Filters({filters,selectedFilterIndex,setSelectedFilterIndex}){
    const handleChange=(event,newvalue)=>{
        setSelectedFilterIndex(newvalue)
    }
    function allyProps(index)
    {
        return{
            id:`simple-tab-${index}`,
            "aria-controls":`simple-tabbox-${index}`,
        }
    }

    return(
        <div>
            <Tabs
             value={selectedFilterIndex}
             onChange={handleChange}
             aria-label="basic tabs"
             TabIndicatorProps={
                {
                    style:{
                        backgroundColor:"var(--color-primary)",

                    },
                }}
                >
                  {filters.map((ele,idx)=>(
                       <Tab className={StyleSheet.tab} label={ele.label} {...allyProps(idx)}
                       sx={{
                        color:" var(--color-white)", 
                    }}/>
                  ))}
                </Tabs>
             
        </div>
    )
}

export default Filters;