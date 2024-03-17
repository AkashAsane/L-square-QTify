import React from "react";
import styles from "./hero.module.css"
import HeroImage from '../../assest/hero_headphones.png'

function Hero()
{
    return(
        < div className={styles.heroSection}>
             <div className={styles.heroContent}>
               <h1>100 Thousand Songs, ad-free </h1>
               <h1>Over thousands podcast episodes</h1>
             </div>
             
             <img className={styles.heroimg} src={HeroImage} alt="" />
             
        </div>
    )
}

export default Hero;