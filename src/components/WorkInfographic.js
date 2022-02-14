import Image from 'next/image'
import Link from 'next/link'
import {ExternalLinkIcon} from '@heroicons/react/outline'

const WorkInfographic = () => {
  const work_info = [
    {
      position: 'right',
      title: 'MyPower.Lk',
      date: '2020-2021',
      desc: 'An e-commerce website built on NextJS and ExpressJS. It was a locally funded site built for the Sri Lankan E-Commerce sector and was headed by MyPower.Lk',
      image: 'http://picsum.photos/2000',
      link: 'http://google.com',
      achievements: [
        {
          item: 'Lead Front end development of the project'
        },
        {
          item: 'Consulted on the application design and architecture'
        },
        {
          item: 'Built the UI of the site and Front end functionality'
        },
        {
          item: 'Enforced code quality and implemented a code review process'
        },
      ]
    },
    {
      position: 'left',
      title: 'MyPower.Lk',
      date: '2020-2021',
      desc: 'An e-commerce website built on NextJS and ExpressJS. It was a locally funded site built for the Sri Lankan E-Commerce sector and was headed by MyPower.Lk',
      image: 'http://picsum.photos/2000',
      link: 'http://google.com',
      achievements: [
        {
          item: 'Lead Front end development of the project'
        },
        {
          item: 'Consulted on the application design and architecture'
        },
        {
          item: 'Built the UI of the site and Front end functionality'
        },
        {
          item: 'Enforced code quality and implemented a code review process'
        },
      ]
    },
  ]

  return (
    <section className="work-infographic">
      <div className="container">
        <h2 className="work-infographic__title font-semibold mb-16 md:mb-20 relative max-w-max">Stuff I&apos;ve Built</h2>
        {work_info.map((work_item, index) => (
          <article key={index} className={`work-infographic__card work-infographic__card--${work_item.position} flex flex-col md:flex-row items-center`}>
            <div className="work-infographic__left md:w-2/6">
              <h2 className="flex flex-row items-center font-semibold uppercase mb-5 relative max-w-max">{work_item.title}<span className="font-normal text-xs text-grey">{work_item.date}</span></h2>
              <p>{work_item.desc}</p>
              <ul>
                {work_item.achievements.map((list_item, index) => (
                  <li className="flex flex-row items-center" key={index}><span className="rounded-full mr-5"></span>{list_item.item}</li>
                ))}
              </ul>
            </div>
            <div className="work-infographic__right w-full md:w-1/2 md:ml-auto">
              <Link href="https://google.com">
                <div className="work-infographic__image relative">
                  <Image src={work_item.image} width={580} height={350} layout='responsive' />
                  <ExternalLinkIcon />
                </div>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WorkInfographic
