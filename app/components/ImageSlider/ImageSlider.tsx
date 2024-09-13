'use client'
import { useState, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { ImageSliderProps } from "@/app/utilities/types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import style from './style.module.css';

const ImageSlider = ({productImages}: ImageSliderProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    return(
        <div className={style.imageSlider}>   
            <Swiper 
             spaceBetween={50} 
             slidesPerView={1} 
             loop={true}
             navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
             thumbs={{ swiper: thumbsSwiper }}
             modules={[Navigation, Thumbs]}
            >
                {productImages.map((image, index)=>
                    <SwiperSlide key={index}><Image src={image} alt="" className={style.slideImage}/></SwiperSlide>
                )}
            </Swiper>
            <Swiper 
             onSwiper={setThumbsSwiper}
             loop={true}
             spaceBetween={10}
             slidesPerView={4}
             freeMode={true}
             watchSlidesProgress={true}
             modules={[Navigation, Thumbs]}
            >
                {productImages.map((image, index)=>
                    <SwiperSlide key={index}><Image src={image} alt="" className={style.slideThumbImage}/></SwiperSlide>
                )}
            </Swiper>
            <div className={style.sliderBtns}>
                <div ref={prevRef} className={style.prevBtn}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div ref={nextRef} className={style.nextBtn}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}
export default ImageSlider;