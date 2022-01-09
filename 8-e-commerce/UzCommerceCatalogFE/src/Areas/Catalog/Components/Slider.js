import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
function Slider() {
    return (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}>
          <SwiperSlide><img src="/images/slider-1.jpg" alt="slider1"/></SwiperSlide>
          <SwiperSlide><img src="/images/slider-2.jpg" alt="slider2"/></SwiperSlide>
        </Swiper>
      );
}

export default Slider;