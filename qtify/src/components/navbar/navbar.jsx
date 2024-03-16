import React from "react";
import styles from "./Navbar.module.css"
import logo from "../../assest/logo.png"
import Search from "../search/search";
import Button from "../button/button";

export default function Navbar()
{
    return(

       <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <Search/>
          <Button>Give Feedback</Button>
       </nav> 
    )
}

