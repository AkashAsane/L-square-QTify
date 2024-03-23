import React from "react";
import Hero from "../hero/hero";
import {useOutletContext} from "react-router-dom";
import Section from "../section/section";
import styles from "./homepage.module.css";
import { FetchFilters } from "../../Api/api";

export default function Homepage(){
    const{data}=useOutletContext();
    const{newAlbums,topAlbums,songs}=data;

    return(
        <>
           <Hero/>
           <div className={styles.hero}>
          <Section title="Top Albums" data={topAlbums} type="album" showToggle={true}/>
          <Section title="New Albums" data={newAlbums} type="album" showToggle={true}/>
          </div>
          <div className={styles.box}>
          <div className={styles.songs}>
          <Section 
          title="Songs"
          data={songs}
          type="song"
          filterSoucre={FetchFilters}
          /> 
          </div>
          </div>
         
        </>
    )
}