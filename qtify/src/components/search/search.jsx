import React from "react";
import {ReactComponent as SearchIcon} from "../../assest/search-icon.svg"
import styles from "./Search.module.css"

export default function Search()
{

    return(

        <div style={{position:"relative"}}>
             <form className={styles.wrapper}>
                <div>
                <input type="text"
                 className={styles.searchbox}
                 placeholder="search a album of you choice"
                />
                </div>
                    <button className={styles.searchbutton} type="submit">
                       <SearchIcon/> 
                    </button>
                    
                

             </form>
        </div>

    )
}
