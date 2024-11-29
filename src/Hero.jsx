import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Hero = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      modules={[Pagination]}
      pagination={{clickable: true, enabled: true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="h-[500px] hero flex flex-col items-start justify-center px-52 gap-10">
          <h1 className="font-bold text-5xl text-white font-serif">Бухгалтерские услуги <br /> в Санкт-Петербурге</h1>
          <button className="px-10 text-white py-3 bg-blue-600">Наша презентация</button>
      </SwiperSlide>
      <SwiperSlide className="h-[500px] hero flex flex-col items-start justify-center px-52 gap-10">
          <h1 className="font-bold text-5xl text-white font-serif">Бухгалтерские услуги <br /> в Санкт-Петербурге</h1>
          <button className="px-10 text-white py-3 bg-blue-600">Наша презентация</button>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
