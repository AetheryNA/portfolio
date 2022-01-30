import {UserIcon} from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AboutCard = () => {
  const { push } = useRouter()

  const navigationToSection = () => {
    push("#about-me")
  }

  return (
    <div className="about-card block relative rounded-lg max-w-max w-full cursor-pointer" onClick={navigationToSection}>
      <Link href='#about-me'>
        <>
          <Image src="/images/aboutme.jpg" width={400} height={485} className="rounded-lg object-cover" alt='about-me-card' />
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
