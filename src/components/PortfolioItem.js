import Image from 'next/image'
import Link from 'next/link'
import {ExternalLinkIcon} from '@heroicons/react/outline'
import { useInView } from 'react-intersection-observer'

const PortfolioItem = ({ work_details }) => {
  const {ref, inView} = useInView({
    threshold: .5,
    triggerOnce: true
  })

  return (
    <article ref={ref} className={`portfolio-item__card portfolio-item__card--${work_details.position} opacity-0 flex flex-col md:flex-row items-center ${inView ? 'portfolio-item__slide-in-' + work_details.position : ''}`}>
      <div className="portfolio-item__left md:w-2/6">
        <h2 className="flex flex-row items-center font-semibold uppercase mb-5 relative max-w-max">{work_details.title}<span className="font-normal text-xs text-grey">{work_details.date}</span></h2>
        <p>{work_details.desc}</p>
        <ul>
          {work_details.achievements.map((list_item, index) => (
            <li className="flex flex-row items-center" key={index}><span className="rounded-full mr-5"></span>{list_item.item}</li>
          ))}
        </ul>
      </div>
      <div className="portfolio-item__right w-full md:w-1/2 md:ml-auto">
        <Link href="https://google.com">
          <div className="portfolio-item__image relative">
            <Image src={work_details.image} width={580} height={350} layout='responsive' />
            <ExternalLinkIcon />
          </div>
        </Link>
      </div>
    </article>
  )
}

export default PortfolioItem
