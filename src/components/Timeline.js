import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from 'swiper'
import NextIcon from '../../public/icons/nextjs.svg'
import ReactIcon from '../../public/icons/react.svg'
import { useRouter } from 'next/router'

import 'swiper/css/pagination';

const Timeline = () => {
  const { push } = useRouter()

  return (
    <div className="timeline ml-5">
      <Swiper
        modules={[Pagination]}
        spaceBetween={15}
        slidesPerView='auto'
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
      >
        <SwiperSlide className='timeline__slide timeline__slide--1 cursor-pointer'>
          <div className='timeline__line timeline__line--first text-sm text-grey absolute flex flex-row justify-between w-full'>my work <span>JAN-MAR</span></div>
          <Link href='#care'>
            <>
              <div className="timeline__slide-wrap timeline__slide-wrap--1 relative" onClick={() => {push('#care')}}>
                <Image src={'/images/care.png'} alt="slide-1" width={735} height={485} className='rounded-xl object-cover' />
                <div className="timeline__details absolute left-5 bottom-5">
                  <h2> MyPower.LK</h2>
                </div>
                <div className="timeline__details absolute right-5 bottom-5">
                  <p className='text-white'>Ecommerce Website made for MyPowerLK</p>
                </div>
                <div className="timeline__details absolute flex flex-row right-5 top-5">
                  <NextIcon />
                  <ReactIcon />
                </div>
              </div>
            </>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='timeline__slide timeline__slide--2 cursor-pointer'>
          <div className='timeline__line text-sm text-grey absolute flex flex-row justify-end w-full'><span>OCT-NOV</span></div>
          <Link href='#wbr'>
            <>
              <div className="timeline__slide-wrap timeline__slide-wrap--2 relative" onClick={() => {push('#wbr')}}>
                <Image src={'/images/wbr.png'} alt="slide-2" width={535} height={485} className='rounded-xl object-cover' />
              </div>
            </>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='timeline__slide timeline__slide--3 cursor-pointer'>
          <div className='timeline__line text-sm text-grey absolute flex flex-row justify-end w-full'><span>SEPT-FEB</span></div>
          <Link href='#mypower'>
            <>
              <div className="timeline__slide-wrap timeline__slide-wrap--3 relative" onClick={() => {push('#mypower')}}>
                <Image src={'/images/mypower.png'} alt="slide-3" width={800} height={485} className='rounded-xl object-cover' />
              </div>
            </>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='timeline__slide timeline__slide--4 cursor-pointer'>
          <div className='timeline__line text-sm text-grey absolute flex flex-row justify-end w-full'><span>FEB-APR</span></div>
          <Link href='#youlead'>
            <>
              <div className="timeline__slide-wrap timeline__slide-wrap--4 relative" onClick={() => {push('#youlead')}}>
                <Image src={'/images/youlead.png'} alt="slide-4" width={1085} height={485} className='rounded-xl object-cover' />
                <div className="timeline__details absolute">
                  <p className='text-white'> Hello world </p>
                </div>
              </div>
            </>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='timeline__slide timeline__slide--5 cursor-pointer'>
          <div className='timeline__line timeline__line--last text-sm text-grey absolute flex flex-row justify-end w-full'><span>SEPT-DEC</span></div>
          <Link href='#dxdy'>
            <>
              <div className="timeline__slide-wrap timeline__slide-wrap--5 relative" onClick={() => {push('#dxdy')}}>
                <Image src={'/images/dxdy.png'} alt="slide-4" width={1085} height={485} className='rounded-xl object-cover' />
                <div className="timeline__details absolute">
                  <p className='text-white'> Hello world </p>
                </div>
              </div>
            </>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Timeline;
