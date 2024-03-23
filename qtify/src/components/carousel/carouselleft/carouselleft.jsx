import React from 'react'
import { useState,useEffect } from 'react'
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import {ReactComponent as LeftArrow} from '../../../assest/LeftArrow.svg'
import styles from './carouselleft.module.css'
import 'swiper/css';

export default function CarouselLeftNavigation  ()  {
    let swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

    useEffect(() => {
        swiper.on("slideChange",  ()=>{
            setIsBeginning(swiper.isBeginning)
        })
    },[swiper])

  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

