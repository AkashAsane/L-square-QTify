import React, { useEffect } from 'react'
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import styles from './carousel.module.css'
import CarouselLeftNavigation from './carouselleft/carouselleft'
import CarouselRightNavigation from './carouselright/carouselright'

const Controls = ({data}) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0);
    },[data])

    return <></>
}

const Carousel = ({data,renderComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper style={{padding:"0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={40}
        allowTouchMove
        >
            <Controls data={data}/>
            <CarouselLeftNavigation/>
            <CarouselRightNavigation/>
            {data.map((ele)=>(
                <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
            ))}

        </Swiper>
    </div>
  )
}

export default Carousel