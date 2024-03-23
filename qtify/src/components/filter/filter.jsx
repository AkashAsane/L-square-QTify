import { useState,useEffect } from "react";
import React from "react";
import { FetchFilters } from "../../Api/api";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import styles from './filter.module.css'
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
                       <Tab className={styles.tab} label={ele.label} {...allyProps(idx)}
                      />
                  ))}
                </Tabs>
             
        </div>
    )
}

export default Filters;