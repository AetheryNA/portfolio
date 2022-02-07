import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import AboutCard from './AboutCard';

import 'swiper/css/pagination';

const Slideshow = () => {
  return (
    <div className="slideshow relative pb-20">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView='auto'
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
          type: 'bullets'
        }}
      >
        <SwiperSlide className='slideshow__slide slideshow__slide--1 cursor-pointer my-auto'>
          <AboutCard />
        </SwiperSlide>
        <SwiperSlide className='slideshow__slide slideshow__slide--2 cursor-pointer my-auto'>
          <Link href='/'>
            <>
              <Image src={'https://picsum.photos/168/275'} alt="slide-2" width={310} height={200} className='slideshow__slide-img rounded-xl object-cover' />
              <div className="slideshow__details"></div>
            </>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='slideshow__slide slideshow__slide--3 cursor-pointer my-auto'>
          <Link href='/'>
            <>
              <Image src={'https://picsum.photos/168/275'} alt="slide-3" width={310} height={200} className='slideshow__slide-img rounded-xl object-cover' />
              <div className="slideshow__details"></div>
            </>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slideshow;
