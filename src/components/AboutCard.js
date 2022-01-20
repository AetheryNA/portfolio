import {UserIcon} from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

const AboutCard = () => {
  return (
    <div className="about-card block relative mt-4 rounded-lg max-w-max cursor-pointer">
      <Link href='/' >
        <>
          <Image src="/images/aboutme.jpg" width={400} height={485} className="rounded-lg object-cover" />
            <div className="about-card__details flex flex-row items-center absolute bottom-5 left-5 lg:bottom-0 lg:left-0 p:3 lg:p-5">
              <UserIcon className="w-5 h-5 lg:w-10 lg:h-10 text-white" />
              <p className='ml-2.5 font-semibold text-white'>about me</p>
            </div>
        </>
      </Link>
    </div>
  );
};

export default AboutCard;
