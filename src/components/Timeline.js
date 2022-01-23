import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from 'swiper'

import 'swiper/css/pagination';

const Timeline = () => {
  return (
    <div className="timeline ml-5">
      <div className="overflow-visible">
        <Swiper
          modules={[Pagination]}
          spaceBetween={15}
          slidesPerView='auto'
          pagination={{
            clickable: true,
            type: 'bullets'
          }}
        >
          <SwiperSlide className='timeline__slide timeline__slide--1 cursor-pointer'>
            <div className='timeline__line text-xs font-grey absolute'>my work</div>
            <Link href='/'>
              <>
                <Image src={'https://picsum.photos/735/485'} width={735} height={485} className='rounded-xl object-cover' />
                <div className="timeline__details"></div>
              </>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='timeline__slide timeline__slide--2 cursor-pointer'>
            <div className='timeline__line'></div>
            <Link href='/'>
              <>
                <Image src={'https://picsum.photos/535/485'} width={535} height={485} className='rounded-xl object-cover' />
              </>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='timeline__slide timeline__slide--3 cursor-pointer'>
            <div className='timeline__line'></div>
            <Link href='/'>
              <>
                <Image src={'https://picsum.photos/800/485'} width={800} height={485} className='rounded-xl object-cover' />
              </>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='timeline__slide timeline__slide--4 cursor-pointer'>
            <div className='timeline__line'></div>
            <Link href='/'>
              <>
                <Image src={'https://picsum.photos/1085/485'} width={1085} height={485} className='rounded-xl object-cover' />
              </>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Timeline;
