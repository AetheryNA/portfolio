import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import AboutCard from './AboutCard';
import { useRouter } from 'next/router'

import 'swiper/css/pagination';

const Slideshow = () => {
  const { push } = useRouter()

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
          <Link href='#care'>
            <>
              <Image src={'/images/care.png'} alt="slide-2" width={310} height={200} className='slideshow__slide-img rounded-xl object-cover' onClick={() => {push('#care')}} />
              <div className="slideshow__details"></div>
            </>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='slideshow__slide slideshow__slide--3 cursor-pointer my-auto'>
          <Link href='#wbr'>
            <>
              <Image src={'/images/wbr.png'} alt="slide-3" width={310} height={200} className='slideshow__slide-img rounded-xl object-cover' onClick={() => {push('#wbr')}} />
              <div className="slideshow__details"></div>
            </>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='slideshow__slide slideshow__slide--3 cursor-pointer my-auto'>
          <Link href='#mypower'>
            <>
              <Image src={'/images/mypower.png'} alt="slide-3" width={310} height={200} className='slideshow__slide-img rounded-xl object-cover' onClick={() => {push('#mypower')}} />
              <div className="slideshow__details"></div>
            </>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='slideshow__slide slideshow__slide--3 cursor-pointer my-auto'>
          <Link href='#youlead'>
            <>
              <Image src={'/images/youlead.png'} alt="slide-3" width={310} height={200} className='slideshow__slide-img rounded-xl object-cover' onClick={() => {push('#youlead')}} />
              <div className="slideshow__details"></div>
            </>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='slideshow__slide slideshow__slide--3 cursor-pointer my-auto'>
          <Link href='#dxdy'>
            <>
              <Image src={'/images/dxdy.png'} alt="slide-3" width={310} height={200} className='slideshow__slide-img rounded-xl object-cover' onClick={() => {push('#dxdy')}} />
              <div className="slideshow__details"></div>
            </>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slideshow;
