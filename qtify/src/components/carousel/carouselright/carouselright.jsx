import React from 'react'
import { useState,useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import {ReactComponent as RightArrow} from '../../../assest/RightArrow.svg'
import styles from './carouselright.module.css'
import 'swiper/css';

export default function CarouselRightNavigation() {
    let swiper = useSwiper();
    const [isEnd,setIsEnd] = useState(swiper.isEnd)

    useEffect(() => {
        swiper.on("slideChange", ()=>{
            setIsEnd(swiper.isEnd)
        })
    },[swiper])

  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

