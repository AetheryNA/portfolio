import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const {ref, inView} = useInView({
    threshold: .5,
  })

  const languages = [
    {
      name: 'Javascript'
    },
    {
      name: 'React'
    },
    {
      name: 'NextJs'
    },
    {
      name: 'Typescript'
    },
    {
      name: 'PostgreSQL'
    },
    {
      name: 'Python'
    },
  ]

  return (
    <section id="about-me" className={`about-me h-screen flex flex-col mt-10 md:flex-row md:mt-44 ${inView ? 'in-view' : ''}`} ref={ref} >
      <div className="container container--small flex flex-col md:flex-row items-center">
        <div className="about-me__left flex flex-col md:w-5/12">
          <h2 className={`${inView ? 'in-view-underline' : ''} text-sm md:text-2xl font-semibold relative`}>about me</h2>
          <p className="mt-2.5 relative about-me__para-1">
            Hello! My name is Naveed Ahamed and I love building things for the internet. Throughout my journey of being a full stack developer, I&apos;ve yearned to learn more things in the field! Along with my current knowledge, I&apos;m eager to dip my fingers into something a lot more adventurous.
          </p>
          <p className="mt-2.5 md:mt-5 relative about-me__para-2">
            Today however, I&apos;ve worked for a maximum of 2 years and looking for adventure to further my knowledge in web development. I&apos;ve worked for a <Link href="/">small company</Link> and a <Link href="/">start up company</Link> who&apos;s currently managing an ecommerce site that I was glad to be a part of!
          </p>
          <ul className="about-me__list relative mt-5">
            {languages.map((language, index) => (
              <li key={index} className="font-light mb-4 flex flex-row items-center">
                <span className="circle rounded-full mr-3"></span>
                {language.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-me__right flex flex-col w-full mt-12 md:mt-0 md:w-4/12 md:ml-auto md:mr-8">
          <div className="about-me__right-wrap block w-3/5 md:w-full relative">
            <Image src="/images/aboutme.jpg" width={700} height={1000} layout='responsive' alt="about-me-pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
