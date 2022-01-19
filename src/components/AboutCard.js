import {UserIcon} from '@heroicons/react/solid'
import Image from 'next/image'

const AboutCard = () => {
  return (
    <div className="about-card relative mt-4 rounded-lg max-w-max">
      <Image src="https://picsum.photos/1000" width={400} height={485} className="rounded-lg" />
      <div className="about-card__details flex flex-row items-center absolute bottom-0 left-0 p:3 lg:p-5">
        <UserIcon className="w-5 h-5 lg:w-10 lg:h-10 text-white" />
        <p className='ml-2.5 font-semibold text-white'>about me</p>
      </div>
    </div>
  );
};

export default AboutCard;
